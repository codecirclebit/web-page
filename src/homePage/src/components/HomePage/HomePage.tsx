import React from 'react'
import Team from '../Team/Team'
import './HomePage.css'

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="brand-cont">
          <img className="brand-logo" src="cclogo.png" alt="Code Circle"></img>
          <p>
            <a
              href="https://www.bitsathy.ac.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bannari Amman Institute of Technology
            </a>
          </p>
        </div>

        <div className="about-cont">
          <div className="about-desp">
            <p className="about-desp-head">
              {' '}
              What is <span style={{ color: '#e6a122' }}>Code Circle</span>?
            </p>
            <p className="about-desp-body">
              Code Circle is an endeavour to provide a gateway for budding code
              seekers in our institute. We constitute a platform that allows
              seekers to ameliorate their coding ability. The endeavour of our
              crew is to escalate the enthusiasm for coding among the budding
              seekers and well-versed coders in our institute.
            </p>
          </div>

          <img src={'../../static/images6.jpg'} alt="404"></img>
        </div>
        <Team />
      </div>
    )
  }
}
