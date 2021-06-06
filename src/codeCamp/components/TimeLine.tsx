import { Component } from 'react'
import './TimeLine.css'
import Card from './Card'
import UpComingCard from './UpCommingCard'

const CardList: ICard[] = [
  {
    season: 'MAY 2021',
    status: 'open',
    RegForm: 'https://google.com',
  },
  {
    season: 'JULY 2021',
    status: 'upcoming',
    RegForm: 'https://google.com',
  },
  {
    season: 'SET 2021',
    status: 'upcoming',
    RegForm: 'https://google.com',
  },
]

export default class TimeLine extends Component {
  render() {
    return (
      <div className="TimeLine-contanier">
        <div className="TimeLine">
          {CardList.map((Props, id) => (
            <Card key={id} {...Props} />
          ))}
          <UpComingCard />
        </div>
      </div>
    )
  }
}
