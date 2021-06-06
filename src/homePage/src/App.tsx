import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './components/HomePage/HomePage'
import Events from './components/EventPage/EventPage'
import Error404 from './components/Error404'
import Header from './components/Header'
import Footer from './components/Footer'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header navColor={'white'} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/events">
            <Events />
          </Route>
          <Route path="*" component={Error404} />
        </Switch>
        <Footer />
      </div>
    )
  }
}
