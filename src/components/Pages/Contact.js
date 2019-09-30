import React from 'react';

import './Contact.css'

const Contact = (props) => {
  return (
    <div>
      <img id="Iceland-photo"
        src="https://i.imgur.com/9LcT8uW.png"
        alt="Kim in Iceland"
      />
      <div id="Top-right">
        <button id="Linkedin-button"
          title="LinkedIn Link"
          onClick={ props.openLinkedIn }
        >
          <h1 id="Linked">in</h1>
        </button>
        <button id="Github-button"
          title="Github Link"
          onClick={ props.openGitHub }
        >
          <img
            id="Github"
            alt="GitHub Link"
            src="https://i.imgur.com/t3oCRIM.png"/>
        </button>
        <div id="Text-box-div">
          <p className="Text-line-1">
            Like what you see?
            <span id="Text-line">&nbsp;</span>
          </p>
          <a id="Text-line-2"
            href={ `mailto: "heidorkn@gmail.com"` }
          >
            Let's chat!
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

export default Contact;
