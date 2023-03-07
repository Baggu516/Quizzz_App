import React from 'react'
import { useContext } from 'react'
import {store} from '../App'
const End = () => {
    const {score,setScore}=useContext(store)
  return (
    <div>
        <h1>Your Score : {score}</h1>
        {score<2?<p>Need to Improve</p>:<p>Good score</p>}
    </div>
  )
}

export default End