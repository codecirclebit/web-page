import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from 'react-bootstrap'
import './style.css'
import 'bootstrap/dist/css/bootstrap.css'
interface NabBarProps {
  navColor: string
}

type NabBarState = NabBarProps

export default class NabBar extends React.Component<NabBarProps, NabBarState> {
  state = { ...this.props }
  render() {
    return (
      <div>
        <Navbar expanded={true} variant="dark" bg="dark" expand="xl">
          <Navbar.Brand>
            <Link style={{ color: 'white', textDecoration: 'none' }} to="/">
              Code Circle
            </Link>
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text className="p-3">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </Navbar.Text>
            <Navbar.Text className="p-3">
              <Link className="nav-link" to="/events">
                Events
              </Link>
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}
