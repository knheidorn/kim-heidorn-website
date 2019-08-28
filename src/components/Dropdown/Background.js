import React, { Component } from 'react';

class Background extends Component {
  render() {
    return (
      <div className="Background" onClick={ this.props.closeDropdown }>
      </div>
    )
  }
}

export default Background;
