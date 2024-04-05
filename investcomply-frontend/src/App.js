import React, { useState } from 'react';
import './App.css';

function App() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // List collections from Milvus
    const MILVUS_COLLECTION_ENDPOINT = "https://in03-0677cdab95e6b4d.api.gcp-us-west1.zillizcloud.com/v1/vector/collections";
    const API_KEY = "f4f595d8aa2d873c337b6b6ffe493762214dc2ce17781f050f95d113d8b32d3a22caf58c21bce6d9ad2c834b062627ad9a0dff75"


    try {
      const response = await fetch(MILVUS_COLLECTION_ENDPOINT, {
        method: 'GET', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': API_KEY, // Not safe for production
        },
      });
      
      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log('Success:', result);
      setResults(result);
    } catch (error) {
      console.log('Failed:', error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Where knowledge begins</h1>
        <form onSubmit={handleSubmit} className="search-form">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ask anything..."
            className="search-input"
          />
          <button type="submit" className="search-button">List Collections</button>
        </form>
        <div className="results">
          {results.collections?.map((collection, index) => (
            <div key={index} className="result-item">
              {collection.name}
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
