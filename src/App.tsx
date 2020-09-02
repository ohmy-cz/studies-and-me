import React from 'react';
import './App.css';
import GitUser from './components/GitUser';
import GitSearch from './components/GitSearch';

function App() {
  return (
    <div className="App">
      <h1>Studies &amp; Me</h1>
      <GitSearch />
      <h5 style={{ marginTop:230 }}>Author:</h5>
      <GitUser login="ohmy-cz" />
    </div>
  );
}

export default App;
