  import { useContext,useState } from "react"
import React from 'react'
import {store} from "../App"
const Menu = () => {
    const {game,setGame}=useContext(store)
  return (
    <div>
        <button onClick={()=>setGame("quiz")}>Start Quiz</button>
    </div>
  )
}

export default Menu