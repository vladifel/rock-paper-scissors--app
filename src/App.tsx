import React from 'react';
import './App.css';
import GamePage from './features/GamePage';
import InstructionsPage from './features/InstructionsPage';

function App() {
  return (
    <div className="App">
      {/* <InstructionsPage />*/}
      { <GamePage />}
    </div>
  );
}

export default App;
