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
          <p id="Text-body-about"> </p>
        </div>
      </div>
    )
  }
}

export default About;
