import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

import './Dropdown.css';
import About from '../Pages/About'
import Blog from '../Pages/Blog'
import Contact from '../Pages/Contact'
import Home from '../Pages/Home'
import Portfolio from '../Pages/Portfolio'
import ToggleButton from './ToggleButton'

class Dropdown extends Component {
  render() {
    return (
      <Router>
        <nav className="Dropdown">
          <div>
            <ul>
              <NavLink className="Dropdown-links" activeClassName="Dropdown-links-active" to="/about">
                <li>
                  My Story
                </li>
              </NavLink>
              <NavLink className="Dropdown-links" activeClassName="Dropdown-links-active" to="/portfolio">
                <li>
                  My Work
                </li>
              </NavLink>
              <NavLink className="Dropdown-links" activeClassName="Dropdown-links-active" to="/blog-posts">
                <li>
                  My Blog
                </li>
              </NavLink>
              <NavLink className="Dropdown-links" activeClassName="Dropdown-links-active" to="/contact">
                <li>
                  Say Hello
                </li>
              </NavLink>
            </ul>
          </div>
        </nav>
        <div>
          <Route exact path="/" component={ () =>
            <Home />
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
            <Contact />
          }/>
        </div>
      </Router>
    )
  }
}

export default Dropdown;
