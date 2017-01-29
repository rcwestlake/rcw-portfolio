import React, { Component } from 'react'
import { slideUpAnimation } from '../../helpers/animations'
import tom                  from './images/contact-tom.gif'
import github               from './images/github-icon.png'
import linkedin             from './images/linkedin-icon.png'
import mail                 from './images/mail-icon.png'
import twitter              from './images/twitter-icon.png'
import './contact.scss'

class Contact extends Component {
  componentDidMount() {
    const content = this.one

    slideUpAnimation(content)
  }

  render() {
    return (
      <section
        className="contact-container"
        ref={(i) => { this.one = i }}
      >
        <section className="greeting-container">
          <h1 className="greeting">
            Contact
          </h1>
        </section>
        <section className="detail-container">
          <p>I look forward to connecting. <a href="mailto:ryancwestlake@gmail.com">Email</a> tends to be the best and quickest way to reach me.</p>
          <ul>
            <li>
              <a
                href="mailto:ryancwestlake@gmail.com"
              >
                <img
                  src={mail}
                  alt="Email icon"
                  className="icon"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/ryancwestlake"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={linkedin}
                  alt="LinkedIn icon"
                  className="icon"
                />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/rcwestlake"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={twitter}
                  alt="Twitter icon"
                  className="icon"
                />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/rcwestlake"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={github}
                  alt="Github icon"
                  className="icon"
                />
              </a>
            </li>
          </ul>
          <section className="gif-container">
            <h4>Just like Tom would:</h4>
            <img
              src={tom}
              alt="Video of Tom Hanks about to contact me. He would tell you to contact me as well"
              className="gif"
            />
          </section>
        </section>
      </section>
    )
  }
}

export default Contact
