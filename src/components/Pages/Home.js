import React, { Component } from 'react';
import Resume from '../Documents/Resume.pdf'

class Home extends Component {
  render() {
    return (
      <div className="About-page">
        <img id="Pool-photo"
          src="https://i.imgur.com/rvzY26z.png"
          alt="Kim Playing Pool"
        />
        <div className="About-text-field">
          <p id="Title-about">Hello!</p>
          <p id="Text-body-about-1">I am a <strong>Software Engineer</strong>.</p>
          <p id="Text-body-about-2">I have been an <strong>HR Manager</strong>.</p>
          <p id="Text-body-about-3">I am a proud <strong>Dog Mom</strong>.</p>
          <p id="Text-body-about-4">I was an <strong>Operations Manager</strong>.</p>
          <p id="Text-body-about-5">
            <img src="https://i.imgur.com/CHs2IJI.png"
              className="About-icons"
              alt="Instagram Icon"
              onClick={ this.props.openInstagram }
            />
            <img src="https://i.imgur.com/IuNIqOk.png"
              className="About-icons"
              alt="LinkedIn Icon"
              onClick={ this.props.openLinkedIn }
            />
            <img src="https://i.imgur.com/Rs25HP5.png"
              alt="GitHub Icon"
              className="About-icons"
              onClick={ this.props.openGitHub }
            />
            <a id="Resume-button"
              href={ Resume }
              target="_blank"
              rel="noopener noreferrer"
            >
              CV
            </a>
          </p>
        </div>
      </div>
    )
  }
}

export default Home;
