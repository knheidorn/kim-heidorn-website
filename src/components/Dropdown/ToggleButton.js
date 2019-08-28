import React, { Component } from 'react'

import './Dropdown.css';

class ToggleButton extends Component {
  render() {
    return (
      <button className="Toggle-list" onClick={ this.props.openDropdown }>
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
