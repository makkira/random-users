import React, { useState } from 'react';
import './App.css';
import UserInputSection from './Components/UserInputSection';

function App() {
  const [results, setResults] = useState(200);
  const [nat, setNat] = useState('us');

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="hero-title">Random User Generator</h1>
        <p className="hero-subtitle">
          Choose how many users to fetch and their nationality
        </p>
        <UserInputSection
          results={results}
          setResults={setResults}
          nat={nat}
          setNat={setNat}
        />
      </header>
    </div>
  );
}

export default App;
