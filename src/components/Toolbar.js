import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

import About from './Pages/About'
import Blog from './Pages/Blog'
import Contact from './Pages/Contact'
import Home from './Pages/Home'
import Portfolio from './Pages/Portfolio'
import ToggleButton from './Dropdown/ToggleButton'

class Toolbar extends Component {

  render() {
    return (
      <Router>
        <div>
          <header className="Toolbar-header">
            <nav className="Toolbar-nav">
              <div>
                <NavLink exact className="Toolbar-home" activeClassName="Toolbar-home-active" to="/">
                  <div>
                    Home
                  </div>
                </NavLink>
              </div>
              <div className="Spacer">
              </div>
              <div>
                <ToggleButton />
              </div>
              <div className="Toolbar-items">
                <ul>
                  <NavLink className="Toolbar-links" activeClassName="Toolbar-links-active" to="/about">
                    <li>
                      My Story
                    </li>
                  </NavLink>
                  <NavLink className="Toolbar-links" activeClassName="Toolbar-links-active" to="/portfolio">
                    <li>
                      My Work
                    </li>
                  </NavLink>
                  <NavLink className="Toolbar-links" activeClassName="Toolbar-links-active" to="/blog-posts">
                    <li>
                      My Blog
                    </li>
                  </NavLink>
                  <NavLink className="Toolbar-links" activeClassName="Toolbar-links-active" to="/contact">
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
          </header>
        </div>
      </Router>
    )
  }
}

export default Toolbar;
