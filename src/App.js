import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import './App.css';

import Toolbar from './components/Toolbar'
import Dropdown from './components/Dropdown/Dropdown'
import Background from './components/Dropdown/Background'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Toolbar />
        <Dropdown />
        <Background />
      </div>
    )
  }
}

export default App;
