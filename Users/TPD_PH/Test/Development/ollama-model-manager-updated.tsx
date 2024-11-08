import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Define the type for a model
interface Model {
  id: string;
  name: string;
  description: string;
  version: string;
}

// Component for managing models
const ModelManager: React.FC = () => {
  const [models, setModels] = useState<Model[]>([]);
  const [selectedModel, setSelectedModel] = useState<Model | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch models from the server
  const fetchModels = async () => {
    setLoading(true);
    try {
      const response = await axios.get('/api/models');
      setModels(response.data);
    } catch (err) {
      setError('Failed to fetch models');
    } finally {
      setLoading(false);
    }
  };

  // Handle model selection
  const handleSelectModel = (model: Model) => {
    setSelectedModel(model);
  };

  // Handle model update
  const handleUpdateModel = async (updatedModel: Model) => {
    setLoading(true);
    try {
      await axios.put(`/api/models/${updatedModel.id}`, updatedModel);
      setModels(models.map(model => model.id === updatedModel.id ? updatedModel : model));
      setSelectedModel(updatedModel);
    } catch (err) {
      setError('Failed to update model');
    } finally {
      setLoading(false);
    }
  };

  // Handle model deletion
  const handleDeleteModel = async (modelId: string) => {
    setLoading(true);
    try {
      await axios.delete(`/api/models/${modelId}`);
      setModels(models.filter(model => model.id !== modelId));
      setSelectedModel(null);
    } catch (err) {
      setError('Failed to delete model');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchModels();
  }, []);

  return (
    <div>
      <h1>Model Manager</h1>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {models.map(model => (
          <li key={model.id} onClick={() => handleSelectModel(model)}>
            {model.name} (v{model.version})
          </li>
        ))}
      </ul>
      {selectedModel && (
        <div>
          <h2>Selected Model</h2>
          <p>Name: {selectedModel.name}</p>
          <p>Description: {selectedModel.description}</p>
          <p>Version: {selectedModel.version}</p>
          <button onClick={() => handleUpdateModel(selectedModel)}>Update</button>
          <button onClick={() => handleDeleteModel(selectedModel.id)}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default ModelManager;

