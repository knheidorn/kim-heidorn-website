import React, { Component } from 'react';
import Resume from '../Documents/Resume.pdf'

import './Pages.css'

class About extends Component {

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
            <p className="Text-name-line">
              My name is Kim.
              <span id="Text-line">|</span>
            </p>
            <p className="Text-about-me">
              After years of working in business administration, I switched careers
              into a job I found more meaningful every day -
              <strong>Software Engineering</strong>.
            </p>
            <p className="Text-about-me">
              I went the non-traditional route and completed Flatiron School’s
              Full-Stack Web Development program.
            </p>
            <p className="Text-about-me">
              I love building interactive, dynamic and user-centered website designs
              that encourage customer engagement - leaving you time to get on
              with the things you do best.
            </p>
            <p className="Text-about-me">
              Want to learn more?
            </p>
            <a className="Text-about-me"
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
