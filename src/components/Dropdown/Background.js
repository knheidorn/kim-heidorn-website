import React, { Component } from 'react';

import './Dropdown.css'

class Background extends Component {
  render() {
    return (
      <div className="Background" onClick={ this.props.closeDropdown }>
      </div>
    )
  }
}

export default Background;
