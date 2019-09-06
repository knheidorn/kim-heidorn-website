import React, { Component } from 'react';
import Resume from '../Documents/Resume.pdf'

import './Pages.css'

class About extends Component {

  render() {
    return (
      <div>
        <img id="Iceland-photo"
          src="https://i.imgur.com/9LcT8uW.png"
          alt="Kim in Iceland"
        />
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
            <p className="Text-name-line">
              My name is Kim.
              <span id="Text-line">|</span>
            </p>
            <p className="Text-about-me"
              id="Line-1"
            >
              After years of working in business administration, I switched to a career
              I found more meaningful -
              <strong> Software Engineering</strong>.
            </p>
            <p className="Text-about-me"
              id="Line-2"
            >
              I love building interactive and user-centered websites.
            </p>
            <p className="Text-about-me"
              id="Line-3"
            >
              I want to encourage customer engagement -
              leaving you time to do what you do best.
            </p>
            <p id="Line-4"
            >
              Want to learn more?
            </p>
            <a id="Text-about-resume"
              href={ Resume }
              target="_blank"
              rel="noopener noreferrer"
            >
              Check out my resume
            </a>
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

export default About;
