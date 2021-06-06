import React from 'react'

interface IMemberState {
  align: string
  member: IMember
}

interface IMemberProps {
  id: number
  member: IMember
}

export default class Member extends React.Component<
  IMemberProps,
  IMemberState
> {
  state = {
    align: this.props.id % 2 === 0 ? 'team-member-odd' : 'team-member-even',
    member: this.props.member,
  }

  profileClick(profileUrl: string) {
    console.log(profileUrl)
    window.open(profileUrl, '_blank')
  }

  render() {
    return (
      <button
        className={`team-member ${this.state.align}`}
        onClick={() => {
          this.profileClick(this.state.member.linkedInUrl)
        }}
      >
        <img src={this.state.member.pictureUrl} alt=" " />
        <p id="name"> {this.state.member.name} </p>
        <p id="position"> {this.state.member.position} </p>
        <p id="quote"> {this.state.member.quote}</p>
      </button>
    )
  }
}
