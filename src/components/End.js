import React from 'react'
import { useContext } from 'react'
import {store} from '../App'
const End = ({score}) => {
    //const [score,setScore]=useContext(store)
  return (
    <div>
        <h1>Your Score : {score}</h1>
        
    </div>
  )
}

export default End