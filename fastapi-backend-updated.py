from fastapi import FastAPI, HTTPException, BackgroundTasks
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
from typing import Optional, List, Dict
import httpx
import asyncio
import json
import os
from enum import Enum

app = FastAPI(title="Ollama Model Manager API")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # React frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Pydantic models for request/response validation
class ModelStatus(str, Enum):
    DOWNLOADING = "downloading"
    DOWNLOADED = "downloaded"
    FAILED = "failed"
    AVAILABLE = "available"

class ModelSettings(BaseModel):
    name: str
    token_limit: Optional[int] = Field(None, gt=0)
    rate_limit: Optional[float] = Field(None, gt=0)
    status: Optional[ModelStatus] = ModelStatus.AVAILABLE

class ModelResponse(BaseModel):
    id: str
    name: str
    status: ModelStatus
    current_tokens: int = Field(default=2048)
    rate_limit: float = Field(default=1.0)

class ModelList(BaseModel):
    models: List[ModelResponse]

# In-memory storage for model status (in production, use a proper database)
model_status: Dict[str, ModelResponse] = {}

# Ollama API configuration
OLLAMA_API_BASE = "http://localhost:11434/api"
OLLAMA_CONFIG_DIR = os.path.expanduser("~/.ollama")

async def download_model_task(model_name: str) -> None:
    """Background task for model downloading"""
    try:
        model_status[model_name].status = ModelStatus.DOWNLOADING
        async with httpx.AsyncClient() as client:
            response = await client.post(
                f"{OLLAMA_API_BASE}/pull",
                json={"name": model_name},
                timeout=None  # Models can be large
            )
            if response.status_code == 200:
                model_status[model_name].status = ModelStatus.DOWNLOADED
            else:
                model_status[model_name].status = ModelStatus.FAILED
    except Exception as e:
        model_status[model_name].status = ModelStatus.FAILED
        print(f"Error downloading model {model_name}: {str(e)}")

async def get_model_config(model_name: str) -> dict:
    """Get model configuration from Ollama"""
    config_path = os.path.join(OLLAMA_CONFIG_DIR, "models", f"{model_name}.json")
    try:
        with open(config_path, 'r') as f:
            return json.load(f)
    except FileNotFoundError:
        return {}

async def save_model_config(model_name: str, config: dict) -> None:
    """Save model configuration to Ollama"""
    config_path = os.path.join(OLLAMA_CONFIG_DIR, "models", f"{model_name}.json")
    os.makedirs(os.path.dirname(config_path), exist_ok=True)
    with open(config_path, 'w') as f:
        json.dump(config, f, indent=2)

@app.get("/api/models", response_model=ModelList)
async def list_models():
    """List all available models"""
    try:
        async with httpx.AsyncClient() as client:
            response = await client.get(f"{OLLAMA_API_BASE}/tags")
            if response.status_code != 200:
                raise HTTPException(status_code=500, detail="Failed to fetch models from Ollama")
            
            models_data = response.json().get("models", [])
            models = []
            
            for model in models_data:
                model_name = model.get("name")
                config = await get_model_config(model_name)
                
                model_response = ModelResponse(
                    id=model_name,
                    name=model_name,
                    status=ModelStatus.DOWNLOADED,
                    current_tokens=config.get("token_limit", 2048),
                    rate_limit=config.get("rate_limit", 1.0)
                )
                models.append(model_response)
            
            return ModelList(models=models)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/api/models/download")
async def download_model(model_name: str, background_tasks: BackgroundTasks):
    """Start downloading a model"""
    if model_name in model_status and model_status[model_name].status == ModelStatus.DOWNLOADING:
        raise HTTPException(status_code=400, detail="Model is already being downloaded")
    
    model_status[model_name] = ModelResponse(
        id=model_name,
        name=model_name,
        status=ModelStatus.DOWNLOADING
    )
    
    background_tasks.add_task(download_model_task, model_name)
    return {"status": "success", "message": f"Started downloading model {model_name}"}

@app.put("/api/models/{model_name}/settings")
async def update_model_settings(model_name: str, settings: ModelSettings):
    """Update model settings"""
    try:
        config = await get_model_config(model_name)
        
        if settings.token_limit:
            config["token_limit"] = settings.token_limit
        if settings.rate_limit:
            config["rate_limit"] = settings.rate_limit
            
        await save_model_config(model_name, config)
        return {"status": "success", "message": f"Settings updated for model {model_name}"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.put("/api/models/{model_name}/rename")
async def rename_model(model_name: str, new_name: str):
    """Rename a model"""
    try:
        # Get current config
        config = await get_model_config(model_name)
        
        # Save config with new name
        await save_model_config(new_name, config)
        
        # Remove old config
        old_config_path = os.path.join(OLLAMA_CONFIG_DIR, "models", f"{model_name}.json")
        if os.path.exists(old_config_path):
            os.remove(old_config_path)
            
        return {"status": "success", "message": f"Model renamed from {model_name} to {new_name}"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/api/models/{model_name}/status")
async def get_model_status(model_name: str):
    """Get the current status of a model"""
    if model_name not in model_status:
        raise HTTPException(status_code=404, detail="Model not found")
    return model_status[model_name]

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
