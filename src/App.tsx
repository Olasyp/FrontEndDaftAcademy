import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const handleOpenAlert = () => {
    alert('Hello react')
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button onClick={handleOpenAlert}>Open greeting</button>
        <a
          className="App-link"
          href="https://github.com/Olasyp/FrontEndDaftAcademy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Link to my project on GitHub
        </a>
      </header>
    </div>
  );
}

export default App;
