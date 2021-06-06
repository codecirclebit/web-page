import { Component } from 'react'
import './UpCommingCard.css'
export default class UpComingCard extends Component {
  render() {
    return (
      <>
        <div className="End-Field">
          <div className="line-contanier">
            <span className="dot">
              <span className="inner-dot"></span>
            </span>
          </div>
          <div className="End-Card">
            <p> Loading...</p>
          </div>
        </div>
      </>
    )
  }
}
