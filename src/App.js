import React, { Component } from 'react';
import './App.css';
import {GameController} from "./controller/game";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">TETRIS</h1>
        </header>
          <GameController/>
      </div>
    );
  }
}

export default App;
