import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

import './Dropdown.css';

class Dropdown extends Component {

  render() {
    let dropdownClasses = "Dropdown"

    if (this.props.showDropdown) {
      dropdownClasses = "Dropdown Open"
    }

    return (
        <nav className={ dropdownClasses }>
          <div>
            <NavLink exact to="/"
              onClick={ this.props.closeDropdown }
            >
              <img className="Logo-image"
                alt="Website Logo"
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
    )
  }
}

export default Dropdown;
