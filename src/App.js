import React, { useState } from 'react';
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

const App = (props) => {

  const [dropdownOpen, setDropdown] = useState(false)

  const dropdownClickHandler = () => {
    setDropdown(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }))
  }

  const closeDropdownClickHandler = () => {
    setDropdown( false )
  }

  const openLinkedIn = () => {
    window.open("https://www.linkedin.com/in/kimheidorn/")
  }

  const openGitHub = () => {
    window.open("https://github.com/knheidorn")
  }

  const openInstagram = () => {
    window.open("https://www.instagram.com/kimesthetic/")
  }

  let background;

  if (dropdownOpen) {
    background = <Background closeDropdown={ closeDropdownClickHandler }/>
  }
  return (
    <Router>
      <div className="App">
        <Toolbar dropdownClickHandler={ dropdownClickHandler }
        />
        <Dropdown showDropdown={ dropdownOpen }
          closeDropdown={ closeDropdownClickHandler }
        />
        { background }
      </div>
      <div>
        <Switch>
          <Route exact path="/" component={ () =>
            <Home openLinkedIn={ openLinkedIn }
              openGitHub={ openGitHub }
              openInstagram={ openInstagram }
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
            <Contact
              openLinkedIn={ openLinkedIn }
              openGitHub={ openGitHub }
            />
          }/>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
