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

  closeDropdownClickHandler = () => {
    this.setState({ dropdownOpen: false })
  }

  openLinkedIn = () => {
    window.open("https://www.linkedin.com/in/kimheidorn/")
  }

  openGitHub = () => {
    window.open("https://github.com/knheidorn")
  }

  render() {
    let background;

    if (this.state.dropdownOpen) {
      background = <Background closeDropdown={ this.closeDropdownClickHandler }/>
    }
    return (
      <div className="App">
        <Toolbar dropdownClickHandler={ this.dropdownClickHandler }
          openLinkedIn={ this.openLinkedIn }
          openGitHub={ this.openGitHub }
        />
        <Dropdown showDropdown={ this.state.dropdownOpen }
          closeDropdown={ this.closeDropdownClickHandler }
          openLinkedIn={ this.openLinkedIn }
          openGitHub={ this.openGitHub }
        />
        { background }
      </div>
    )
  }
}

export default App;
