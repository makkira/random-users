import React, { useState } from 'react';
import './App.css';
import UserInput from './Components/UserInput';

function App() {
  const [results, setResults] = useState(200);
  const [nat, setNat] = useState('us');

  return (
    <div className="App">
      <header className="App-header">
        <UserInput results={results} setResults={setResults} nat={nat} setNat={setNat} />
      </header>
    </div>
  );
}

export default App;
