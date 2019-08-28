import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

class ToggleButton extends Component {
  render() {
    return (
      <button className="Toggle-list">
        <div className="Toggle-items">
        </div>
        <div className="Toggle-items">
        </div>
        <div className="Toggle-items">
        </div>
      </button>
    )
  }
}

export default ToggleButton;
