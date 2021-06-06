import './Rules.css'
import { Component } from 'react'

export default class Rules extends Component {
  render() {
    return (
      <div className="Rules-contanier">
        <h1>Eligibility</h1>
        <ul className="List">
          <li> Register for currnet season</li>
          <li> A Programming Language </li>
          <li> CodeForces Profile </li>
          <li> Offcourse Your Time and Intrest </li>
        </ul>

        <h1>Rules</h1>
        <ul className="List">
          <li> Compelete Daily Targets</li>
          <li> Streak fall to 0 on failing </li>
        </ul>

        <h1> Daily Targets </h1>
        <ul className="List">
          <li>{' Level 0 -> Solve atleast 3 Problems'} </li>
          <li>{' Level 1 -> Solve atleast 4 Problems'} </li>
          <li>{' Level 2 -> Solve atleast 5 Problems'} </li>
        </ul>
      </div>
    )
  }
}
