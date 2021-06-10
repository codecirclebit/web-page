import './board.css'
import React, { useState } from 'react'
const url = 'https://userpic.codeforces.org/1748596/title/3f393af3e58d5d14.jpg'
const user404 = 'https://userpic.codeforces.org/no-title.jpg'
const level = '0'
const stars = 0
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
          <img src={user404} alt="usernotfound" />
          <span className="Level">
            <p> LEVEL {level} </p>
          </span>
          <span className="Stars">
            <p id="tag"> STARS {stars ? '' : '-'}</p>
            <p id="value"> {stars ? starIcon.repeat(stars) : ''}</p>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Board
