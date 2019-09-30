import React from 'react';
import Resume from '../Documents/Resume.pdf'

import './Home.css'

const Home = (props) => {
  return (
    <div className="Home-page">
      <img id="Pool-photo"
        src="https://i.imgur.com/rvzY26z.png"
        alt="Kim Playing Pool"
      />
      <div className="Home-text-field">
        <p id="Title-home">Hello!</p>
        <p id="Text-body-home-1">I am a <strong>Web Developer</strong>.</p>
        <p id="Text-body-home-2">I have been an <strong>HR Manager</strong>.</p>
        <p id="Text-body-home-3">I am a proud <strong>Dog Mom</strong>.</p>
        <p id="Text-body-home-4">I was an <strong>Operations Manager</strong>.</p>
        <p id="Text-body-home-5">
          <img src="https://i.imgur.com/CHs2IJI.png"
            className="Home-icons"
            alt="Instagram Icon"
            onClick={ props.openInstagram }
          />
          <img src="https://i.imgur.com/IuNIqOk.png"
            className="Home-icons"
            alt="LinkedIn Icon"
            onClick={ props.openLinkedIn }
          />
          <img src="https://i.imgur.com/Rs25HP5.png"
            alt="GitHub Icon"
            className="Home-icons"
            onClick={ props.openGitHub }
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

export default Home;
