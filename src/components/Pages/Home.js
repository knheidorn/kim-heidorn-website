import React, { Component } from 'react';

import './Pages.css'

class Home extends Component {
  render() {
    return (
      <div>
        <div id="Top-right">
          <button id="Linkedin-button"
            title="LinkedIn Link"
          >
            <h1 id="Linked">in</h1>
          </button>
          <button id="Instagram-button"
            title="Instagram Link"
          >
            <img
              id="Instagram"
              alt="InstagramLink"
              src="https://brandpalettes.com/wp-content/uploads/2018/10/Instagram.png"/>
          </button>
        </div>
      </div>
    )
  }
}

export default Home;
