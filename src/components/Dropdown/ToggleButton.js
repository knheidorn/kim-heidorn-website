import React from 'react'

import './Dropdown.css';

const ToggleButton = (props) => {
  return (
    <button className="Toggle-list" onClick={ props.openDropdown }>
      <div className="Toggle-items">
      </div>
      <div className="Toggle-items">
      </div>
      <div className="Toggle-items">
      </div>
    </button>
  )
}

export default ToggleButton;
