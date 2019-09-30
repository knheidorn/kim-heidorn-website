import React from 'react'
import { BrowserRouter as Router, Route, NavLink} from 'react-router-dom'

import ToggleButton from './Dropdown/ToggleButton'

import '../App.css'

const Toolbar = (props) => {
  return (
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
            <ToggleButton openDropdown={ props.dropdownClickHandler }/>
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
      </header>
    </div>
  )
}

export default Toolbar;
