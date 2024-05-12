import React, { useState } from 'react';
import './App.css';

function App() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you would call your backend API to process the query and get the results
    console.log('Query submitted:', query);
    
    // Dummy data to simulate results
    const searchResults = [
      "Result 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Result 2: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Result 3: Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi."
    ];

    setResults(searchResults);
    // Remember to replace the above dummy data with actual API call and response handling
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>InvestComply: For Savvy Investors!</h1>
        <form onSubmit={handleSubmit} className="search-form">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ask anything..."
            className="search-input"
          />
          <button type="submit" className="search-button">Search</button>
        </form>
        <div className="results">
          {results.map((result, index) => (
            <div key={index} className="result-item">
              {result}
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
