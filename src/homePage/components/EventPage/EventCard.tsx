import React, { Component } from 'react'
import './Events.css'

type EventCardProps = IEvent
type EventCardState = IEvent

export default class EventCard extends Component<
  EventCardProps,
  EventCardState
> {
  state = { ...this.props }

  redirect(profileUrl: string) {
    console.log(profileUrl)
    window.open(profileUrl, '_blank')
  }

  render() {
    return (
      <div className="event-card">
        <div className="top">
          <i className={`${'bi bi-gear-fill'}`}> </i>
          <div className="title">
            <p id="name">{this.state.name}</p>
            <p id="track">{this.state.track}</p>
          </div>
        </div>
        <div className="bottom">
          <p id="desp">{this.state.description}</p>
          <button
            id="page"
            onClick={() => {
              this.redirect(this.state.pageLink)
            }}
          >
            {this.state.track.toLowerCase() === 'webinar'
              ? 'Register ->'
              : ' Visit event page ->'}
          </button>
        </div>
      </div>
    )
  }
}
