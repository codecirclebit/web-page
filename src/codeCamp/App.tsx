import './App.css'

import { useState } from 'react'

import TimeLine from './components/TimeLine'
import About from './components/About'
import Rules from './components/Rules'
import Faq from './components/Faq'
import Board from './components/dashboard/board'

function App() {
  const [disp, setDisp] = useState<boolean>(false)
  return (
    <div className="App">
      <div className="Header">
        <a href="https://codecircle.bitsathy.ac.in/" target="_blank">
          Code Circle
        </a>
        <button id="about" onClick={() => setDisp(false)}>
          {' '}
          About{' '}
        </button>
        <button id="db" onClick={() => setDisp(true)}>
          Dashboard
        </button>
      </div>
      {disp ? (
        <Board />
      ) : (
        <>
          <div className="Topic">
            <h1 id="Event-name"> code camp </h1>
            <p id="Quote"> Sometimes you win, sometimes you learn </p>
          </div>
          <div className="Body-Contanier">
            <div className="Content">
              <About />
              <Rules />
            </div>
            <TimeLine />
          </div>
          <Faq />
        </>
      )}
    </div>
  )
}

export default App
