import './board.css'
import React, { useState } from 'react'
import axios from 'axios'

const user404 = 'https://userpic.codeforces.org/no-title.jpg'
const starIcon = '🌟'

const Board: React.FC = () => {
  const [handle, setHandle] = useState<string>('')
  const [avatar, setAvatar] = useState<string>(user404)
  const [level, setLevel] = useState<number>(0)
  const [stars, setStars] = useState<number>(0)
  const getScore = async (handle: string) => {
    let url = process.env.CC_ENDPOINT + handle
    const body = await axios.get(url)
    if (body.data.handle == '404') {
      setAvatar(user404)
      setLevel(0)
      setStars(0)
      return
    }
    url = process.env.CF_ENDPOINT + handle
    const profile = await axios.get(url)
    setAvatar(profile.data.result[0].titlePhoto)
    setLevel(parseInt(body.data.level))
    setStars(parseInt(body.data.stars))
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
          <img src={avatar} alt="usernotfound" />
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
