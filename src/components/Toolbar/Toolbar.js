import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

import './Toolbar.css'

import About from '../About'
import Blog from '../Blog'
import Contact from '../Contact'
import Home from '../Home'
import Portfolio from '../Portfolio'

class Toolbar extends Component {
  render() {
    return (
      <Router>
        <div>
          <header className="Toolbar-header">
            <nav>
              <div>
                <NavLink exact activeClassName="Toolbar-link" to="/">
                  <button className="Toolbar-button">
                    Home
                  </button>
                </NavLink>
              </div>
              <div>
                <NavLink activeClassName="Toolbar-link" to="/about">
                  <button className="Toolbar-button">
                    My Story
                  </button>
                </NavLink>
              </div>
              <div>
                <NavLink activeClassName="Toolbar-link" to="/portfolio">
                  <button className="Toolbar-button">
                    My Work
                  </button>
                </NavLink>
              </div>
              <div>
                <NavLink activeClassName="Toolbar-link" to="/blog-posts">
                  <button className="Toolbar-button">
                    My Blog
                  </button>
                </NavLink>
              </div>
              <div>
                <NavLink activeClassName="Toolbar-link" to="/contact">
                  <button className="Toolbar-button">
                    Say Hello
                  </button>
                </NavLink>
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
          </header>
        </div>
      </Router>
    )
  }
}

export default Toolbar;
