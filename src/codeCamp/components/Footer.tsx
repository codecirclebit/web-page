import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './Footer.css'

const codeCircle = {
  mail: 'mailto:codecircle@bitsathy.ac.in',
  linkedIn: 'https://www.linkedin.com/company/codecirclebit/',
  instagram: 'https://www.instagram.com/codecirclebit/',
  gitHub: 'https://github.com/codecirclebit',
}

export default class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="contact">
          <a href={codeCircle.mail} target="_blank" rel="noopener noreferrer">
            <i className="bi bi-envelope-fill"></i>
          </a>
          <a
            href={codeCircle.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-linkedin"></i>
          </a>

          <a
            href={codeCircle.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-instagram"></i>
          </a>

          <a href={codeCircle.gitHub} target="_blank" rel="noopener noreferrer">
            <i className="bi bi-github"></i>
          </a>
        </div>

        <hr />
        <p>
          {' '}
          {'©'} Code Circle, Bannari Amman Institute of Technology,
          Sathyamangalam.
        </p>
      </div>
    )
  }
}
