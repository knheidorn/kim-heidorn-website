import React, { Component } from 'react';

import './Pages.css'

class Home extends Component {

  render() {
    return (
      <div>
        <div id="Top-right">
          <button id="Linkedin-button"
            title="LinkedIn Link"
            onClick={ this.props.openLinkedIn }
          >
            <h1 id="Linked">in</h1>
          </button>
          <button id="Github-button"
            title="Github Link"
            onClick={ this.props.openGitHub }
          >
            <img
              id="Github"
              alt="GitHub Link"
              src="https://i.imgur.com/t3oCRIM.png"/>
          </button>
          <div id="Text-box-div">
            <p className="Text-home">
              Hello, World!
            </p>
            <p className="Text-name-line">
              My name is Kim.
              <span id="Text-line">|</span>
            </p>
          </div>
        </div>
          <div className="Chevon-one">
          </div>
          <div className="Chevon-two">
          </div>
          <div className="Chevon-three">
          </div>
      </div>
    )
  }
}

export default Home;
