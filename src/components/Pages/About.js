import React from 'react';
import Resume from '../Documents/Resume.pdf'

import './About.css'

const About = () => {
  return (
    <div>
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
  )
}

export default About;
