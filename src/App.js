import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import './App.css';

import Toolbar from './components/Toolbar'

class App extends Component {
  render() {
    return (
      <div>
        <Toolbar />
      </div>
    )
  }
}

export default App;
