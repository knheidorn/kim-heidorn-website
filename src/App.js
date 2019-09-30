import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.css';

import Toolbar from './components/Toolbar'
import Dropdown from './components/Dropdown/Dropdown'
import Background from './components/Dropdown/Background'
import About from './components/Pages/About'
import Blog from './components/Pages/Blog'
import Contact from './components/Pages/Contact'
import Home from './components/Pages/Home'
import Portfolio from './components/Pages/Portfolio'

class App extends Component {

  constructor() {
    super()
    this.state = {
      dropdownOpen: false,
      email: "heidorkn@gmail.com"
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

  openInstagram = () => {
    window.open("https://www.instagram.com/kimesthetic/")
  }

  render() {
    let background;

    if (this.state.dropdownOpen) {
      background = <Background closeDropdown={ this.closeDropdownClickHandler }/>
    }
    return (
      <Router>
        <div className="App">
          <Toolbar dropdownClickHandler={ this.dropdownClickHandler }
          />
          <Dropdown showDropdown={ this.state.dropdownOpen }
            closeDropdown={ this.closeDropdownClickHandler }
          />
          { background }
        </div>
        <div>
          <Switch>
            <Route exact path="/" component={ () =>
              <Home openLinkedIn={ this.openLinkedIn }
                openGitHub={ this.openGitHub }
                openInstagram={ this.openInstagram }
              />
            }/>
            <Route path="/about" component={ () =>
              <About />
            }/>
            <Route path="/portfolio" component={ () =>
              <Portfolio />
            }/>
            <Route path="/blog-posts" component={ () =>
              <Blog />
            }/>
            <Route path="/contact" component={ () =>
              <Contact email={ this.state.email }
                openLinkedIn={ this.openLinkedIn }
                openGitHub={ this.openGitHub }
              />
            }/>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
