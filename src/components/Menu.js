  import { useContext,useState } from "react"
  import Button from 'react-bootstrap/Button';

import React from 'react'
import {store} from "../App"
const Menu = () => {
    const {game,setGame}=useContext(store)
  return (
    <div className="game-container">
      <img src="/images/home1.jpg" alt="quiz" className="image" />
        <Button variant="outline-warning" onClick={()=>setGame("quiz")}><b>Start Quiz</b></Button>
        {/* <button ></button> */}
    </div>
  )
}

export default Menu