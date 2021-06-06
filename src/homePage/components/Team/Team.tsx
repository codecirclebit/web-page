import React from 'react'
import Member from './member'
import { MemberList } from './membersData'
import './Team.css'

export default class Team extends React.Component {
  render() {
    return (
      <div className="team-cont">
        <div className="team-desp">
          <p id="title"> Meet the TEAM!</p>
        </div>
        <div className="team-member-cont">
          {MemberList.map((member, id) => (
            <Member key={id} id={id} member={member} />
          ))}
        </div>
      </div>
    )
  }
}
