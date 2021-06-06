import { Component } from 'react'
import './Card.css'

export default class Card extends Component<ICard, {}> {
  redirect() {
    window.open(this.props.RegForm, '_blank')
  }

  renderSwitch() {
    switch (this.props.status) {
      case 'open':
        return (
          <button onClick={() => this.redirect()} id="open">
            Register
          </button>
        )
      case 'upcoming':
        return <button id="upcomming">coming soon</button>
      case 'ongoing' || 'ended':
        return (
          <button onClick={() => {}} id="ongoing">
            {' '}
            view leadboard
          </button>
        )
      case 'closed':
        return <button id="closed"> closed </button>
    }
  }

  render() {
    return (
      <>
        <div className="Field">
          <div className="line-contanier">
            <span className="dot">
              <span className="inner-dot"></span>
            </span>
            <span className="vertical-line"></span>
          </div>
          <div className="Card">
            <p id="Season">{this.props.season} </p>
            {this.renderSwitch()}
          </div>
        </div>
      </>
    )
  }
}
