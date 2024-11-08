from fastapi import FastAPI, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
import uvicorn

# Initialize FastAPI app
app = FastAPI()

# CORS middleware configuration
origins = [
    "http://localhost",
    "http://localhost:8000",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Example Pydantic model
class Item(BaseModel):
    name: str
    description: Optional[str] = None
    price: float
    tax: Optional[float] = None

# In-memory storage for items
items_db = []

# Route to get all items
@app.get("/items/", response_model=List[Item])
async def read_items():
    return items_db

# Route to create a new item
@app.post("/items/", response_model=Item)
async def create_item(item: Item):
    items_db.append(item)
    return item

# Route to get a specific item by name
@app.get("/items/{item_name}", response_model=Item)
async def read_item(item_name: str):
    for item in items_db:
        if item.name == item_name:
            return item
    raise HTTPException(status_code=404, detail="Item not found")

# Route to update an item
@app.put("/items/{item_name}", response_model=Item)
async def update_item(item_name: str, item: Item):
    for idx, existing_item in enumerate(items_db):
        if existing_item.name == item_name:
            items_db[idx] = item
            return item
    raise HTTPException(status_code=404, detail="Item not found")

# Route to delete an item
@app.delete("/items/{item_name}", response_model=Item)
async def delete_item(item_name: str):
    for idx, item in enumerate(items_db):
        if item.name == item_name:
            return items_db.pop(idx)
    raise HTTPException(status_code=404, detail="Item not found")

# Main entry point
if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)

