import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

import './Dropdown.css';
import About from '../Pages/About'
import Blog from '../Pages/Blog'
import Contact from '../Pages/Contact'
import Home from '../Pages/Home'
import Portfolio from '../Pages/Portfolio'

class Dropdown extends Component {

  render() {
    let dropdownClasses = "Dropdown"

    if (this.props.showDropdown) {
      dropdownClasses = "Dropdown Open"
    }

    return (
      <Router>
        <nav className={ dropdownClasses }>
          <div>
            <NavLink exact to="/"
              onClick={ this.props.closeDropdown }
            >
              <img className="Logo-image"
                src="https://res.cloudinary.com/practicaldev/image/fetch/s--F6gmeFfw--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://thepracticaldev.s3.amazonaws.com/uploads/user/profile_image/144545/68024856-175e-41d4-a5e4-47775ed6b7ad.jpg"
              />
            </NavLink>
            <ul>
              <NavLink className="Dropdown-links" activeClassName="Dropdown-links-active" to="/about"
                onClick={ this.props.closeDropdown }
              >
                <li>
                  My Story
                </li>
              </NavLink>
              <NavLink className="Dropdown-links" activeClassName="Dropdown-links-active" to="/portfolio"
                onClick={ this.props.closeDropdown }
              >
                <li>
                  My Work
                </li>
              </NavLink>
              <NavLink className="Dropdown-links" activeClassName="Dropdown-links-active" to="/blog-posts"
                onClick={ this.props.closeDropdown }
              >
                <li>
                  My Blog
                </li>
              </NavLink>
              <NavLink className="Dropdown-links" activeClassName="Dropdown-links-active" to="/contact"
                onClick={ this.props.closeDropdown }
              >
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
