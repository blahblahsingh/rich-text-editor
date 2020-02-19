import React from 'react';
import './App.css';
import MyStatefulEditor from './Rte.js'

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Rich Text Editor</h1>
      </header>

      <MyStatefulEditor />
    </div>

  );
}

export default App;
