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
                <NavLink exact to="/">
                  <img className="Logo-image"
                    alt="Website Logo"
                    src="https://res.cloudinary.com/practicaldev/image/fetch/s--F6gmeFfw--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://thepracticaldev.s3.amazonaws.com/uploads/user/profile_image/144545/68024856-175e-41d4-a5e4-47775ed6b7ad.jpg"
                  />
                </NavLink>
              </div>
              <div className="Spacer">
              </div>
              <div>
                <ToggleButton openDropdown={ this.props.dropdownClickHandler }/>
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
