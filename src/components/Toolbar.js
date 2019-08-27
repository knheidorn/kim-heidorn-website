import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

import About from './About'
import Blog from './Blog'
import Contact from './Contact'
import Home from './Home'
import Portfolio from './Portfolio'

class Toolbar extends Component {

  render() {
    return (
      <Router>
        <div>
          <header className="Toolbar-header">
            <nav className="Toolbar-nav">
              <ul>
                <NavLink exact activeClassName="Toolbar-link" to="/">
                  <li className="Toolbar-li">
                    Home
                  </li>
                </NavLink>
                <NavLink activeClassName="Toolbar-link" to="/about">
                  <li className="Toolbar-li">
                    My Story
                  </li>
                </NavLink>
                <NavLink activeClassName="Toolbar-link" to="/portfolio">
                  <li className="Toolbar-li">
                    My Work
                  </li>
                </NavLink>
                <NavLink activeClassName="Toolbar-link" to="/blog-posts">
                  <li className="Toolbar-li">
                    My Blog
                  </li>
                </NavLink>
                <NavLink activeClassName="Toolbar-link" to="/contact">
                  <li className="Toolbar-li">
                    Say Hello
                  </li>
                </NavLink>
              </ul>
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
