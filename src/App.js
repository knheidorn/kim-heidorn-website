import React, { Component } from 'react';
import './App.css';

import Toolbar from './components/Toolbar'
import Dropdown from './components/Dropdown/Dropdown'
import Background from './components/Dropdown/Background'

class App extends Component {

  constructor() {
    super()
    this.state = {
      dropdownOpen: false
    }
  }

  dropdownClickHandler = () => {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }))
  }

  render() {
    let dropdown;
    let background;

    if (this.state.dropdownOpen) {
      dropdown = <Dropdown />
      background = <Background />
    }
    return (
      <div className="App">
        <Toolbar dropdownClickHandler={ this.dropdownClickHandler }/>
        { dropdown }
        { background }
      </div>
    )
  }
}

export default App;
