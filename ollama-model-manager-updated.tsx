import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Loader2, Download, Settings, RefreshCw } from 'lucide-react';
import axios from 'axios';

const OllamaModelManager = () => {
  const [models, setModels] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [selectedModel, setSelectedModel] = useState(null);
  const [newModelName, setNewModelName] = useState('');
  const [tokenLimit, setTokenLimit] = useState(2048);
  const [rateLimit, setRateLimit] = useState(1);

  useEffect(() => {
    const fetchModels = async () => {
      try {
        setLoading(true);
        const response = await axios.get('/api/models');
        setModels(response.data.models);
      } catch (err) {
        setError('Failed to fetch models. Please try again.');
      } finally {
        setLoading(false);
      }
    };
    fetchModels();
  }, []);

  const handleDownloadModel = async () => {
    setLoading(true);
    setError('');
    try {
      await axios.post('/api/models/download', { model_name: newModelName });
      setModels(prev => [...prev, {
        id: Date.now(),
        name: newModelName,
        status: 'downloading',
        currentTokens: 2048,
        rateLimit: 1
      }]);
      setNewModelName('');
    } catch (err) {
      setError('Failed to download model. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleModelRename = async (modelId, newName) => {
    setLoading(true);
    setError('');
    try {
      await axios.put(`/api/models/${modelId}/rename`, { new_name: newName });
      setModels(prev => prev.map(model => 
        model.id === modelId ? { ...model, name: newName } : model
      ));
      setNewModelName('');
    } catch (err) {
      setError('Failed to rename model. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateModelSettings = async (modelId) => {
    setLoading(true);
    setError('');
    try {
      await axios.put(`/api/models/${modelId}/settings`, {
        token_limit: parseInt(tokenLimit),
        rate_limit: parseFloat(rateLimit)
      });
      setModels(prev => prev.map(model => 
        model.id === modelId ? { 
          ...model, 
          current_tokens: parseInt(tokenLimit), 
          rate_limit: parseFloat(rateLimit)
        } : model
      ));
    } catch (err) {
      setError('Failed to update model settings. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Ollama Model Manager</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Download New Model Section */}
            <div className="flex gap-2">
              <Input 
                placeholder="Enter model name to download"
                value={newModelName}
                onChange={(e) => setNewModelName(e.target.value)}
              />
              <Button
                onClick={handleDownloadModel}
                disabled={loading || !newModelName}
              >
                {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Download className="mr-2 h-4 w-4" />}
                Download
              </Button>
            </div>

            {/* Error Display */}
            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {/* Model List */}
            <div className="space-y-4">
              {models.map(model => (
                <Card key={model.id} className="p-4">
                  <div className="space-y-4">
                    {/* Model Info */}
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-medium">{model.name}</h3>
                      <span className={`px-2 py-1 rounded text-sm ${
                        model.status === 'downloaded' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                      }`}>
                        {model.status}
                      </span>
                    </div>

                    {/* Model Settings */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">Token Limit</label>
                        <Input 
                          type="number"
                          value={model.id === selectedModel?.id ? tokenLimit : model.current_tokens}
                          onChange={(e) => setTokenLimit(e.target.value)}
                          min="1"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Rate Limit</label>
                        <Input 
                          type="number"
                          value={model.id === selectedModel?.id ? rateLimit : model.rate_limit}
                          onChange={(e) => setRateLimit(e.target.value)}
                          min="0.1"
                          step="0.1"
                        />
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex justify-end gap-2">
                      <Button
                        variant="outline"
                        onClick={() => handleModelRename(model.id, newModelName)}
                        disabled={loading || !newModelName}
                      >
                        Rename
                      </Button>
                      <Button
                        onClick={() => handleUpdateModelSettings(model.id)}
                        disabled={loading}
                      >
                        <Settings className="mr-2 h-4 w-4" />
                        Update Settings
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OllamaModelManager;
