import React, { Component } from 'react';

import './Pages.css'

class Home extends Component {

  openLinkedIn = () => {
    window.open("https://www.linkedin.com/in/kimheidorn/")
  }

  openInstagram = () => {
    window.open("https://www.instagram.com/kimesthetic/")
  }

  render() {
    return (
      <div>
        <div id="Top-right">
          <button id="Linkedin-button"
            title="LinkedIn Link"
            onClick={ this.openLinkedIn }
          >
            <h1 id="Linked">in</h1>
          </button>
          <button id="Instagram-button"
            title="Instagram Link"
            onClick={ this.openInstagram }
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
