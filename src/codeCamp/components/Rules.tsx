import './Rules.css'
import { Component } from 'react'

export default class Rules extends Component {
  render() {
    return (
      <div className="Rules-contanier">
        <h1>Eligibility</h1>
        <ul className="List">
          <li> Register for current season</li>
          <li> A Programming Language </li>
          <li> CodeForces Profile </li>
          <li> Of course Your Time and Interest </li>
        </ul>

        <h1>Rules</h1>
        <ul className="List">
          <li> Compelete Daily Targets </li>
          <li> Stars fall to 0 on failing Targets </li>
        </ul>
      </div>
    )
  }
}
