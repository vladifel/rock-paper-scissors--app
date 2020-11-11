import React from 'react';
import './App.css';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import GamePage from './features/GamePage';
import InstructionsPage from './features/InstructionsPage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" >
          <Redirect to="/rules" />
        </Route>
        <Route path="/rules" component={InstructionsPage} />
        <Route path="/play" component={GamePage} />
      </Switch>
    </div>
  );
}

export default App;
