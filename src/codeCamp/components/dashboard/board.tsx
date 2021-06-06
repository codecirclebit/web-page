import './board.css'
import React, { useState } from 'react'
const url = 'https://userpic.codeforces.org/1748596/title/3f393af3e58d5d14.jpg'
const level = 1
const stars = 5
const starIcon = '🌟'

function Board() {
  const [handle, setHandle] = useState<string>('')
  const getScore = (handle: string) => {
    console.log(handle)
  }
  return (
    <div className="Board-contanier">
      <div className="Board">
        <p>SCOREBOARD</p>
        <div>
          <input
            type="text"
            value={handle}
            placeholder={"Codeforce's Handle"}
            onChange={(event) => setHandle(event.target.value)}
          />
          <button id="refresh" onClick={() => getScore(handle)}>
            {' '}
            {'🔁'}{' '}
          </button>
        </div>
        <div className="Profile">
          <img src={url} />
          <div className="Level">
            <h3> Level: {level} </h3>
            {starIcon.repeat(stars)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Board
