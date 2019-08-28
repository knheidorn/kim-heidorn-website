import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import './App.css';

import Toolbar from './components/Toolbar'
import Dropdown from './components/Dropdown'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Toolbar />
        <Dropdown />
      </div>
    )
  }
}

export default App;
