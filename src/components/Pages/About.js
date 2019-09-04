import React, { Component } from 'react';

class About extends Component {
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
          <p id="Text-body-about-2">I use to be a <strong>HR Manager</strong>.</p>
          <p id="Text-body-about-3">I am a proud <strong>Dog Mom</strong>.</p>
          <p id="Text-body-about-4">I use to be a <strong>Operations Manager</strong>.</p>
        </div>
      </div>
    )
  }
}

export default About;
