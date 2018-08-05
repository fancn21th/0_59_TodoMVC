import React, { Component } from 'react';
import Todos from '../Todos/Todos';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>todos</h1>
        </header>
        <Todos/>
        <footer className="App-footer">
          <p> created by <e>fanyj</e> </p>
        </footer>
      </div>
    );
  }
}

export default App;
