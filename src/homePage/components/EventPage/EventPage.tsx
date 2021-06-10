import { PureComponent } from 'react'
import Card from './EventCard'
import axios from 'axios'
import API_FEATCH_ENDPOINT from '../../envConfig'
import './Events.css'

interface EventState {
  events: IEvent[]
}
interface EventsApi extends IEvent {
  _Id: string
}

export default class Event extends PureComponent<{}, EventState> {
  async componentDidMount() {
    await axios
      .get(API_FEATCH_ENDPOINT)
      .then((res) => {
        this.setState({ events: this.formateData(res.data) })
      })
      .catch((error) => console.error(error))
  }

  formateData(data: EventsApi[]) {
    const eventList: IEvent[] = []
    data.map((event: EventsApi) => {
      const eventVal: IEvent = {
        name: event.name,
        track: event.track,
        description: event.description,
        date: new Date(event.date).valueOf(),
        pageLink: event.pageLink,
      }
      eventList.push(eventVal)
      return eventList
    })
    eventList.sort((eventA: IEvent, eventB: IEvent): number => {
      if (eventA.date < eventB.date) {
        return -1
      }
      return 1
    })
    return eventList
  }
  render() {
    return (
      <div className="events-contanier">
        <h2>episodes</h2>
        <div className="card-contanier">
          {this.state ? (
            this.state.events.map((event, key) => <Card key={key} {...event} />)
          ) : (
            <div></div>
          )}
        </div>
      </div>
    )
  }
}
