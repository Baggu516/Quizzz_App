import React from 'react'
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

import Data from './Data'   
import { useState } from 'react'
import { useContext } from "react"
import { store } from "../App"
import End from './End'
const Quiz = () => {
    const [n,setN]=useState(0)
    const [option,setOption]=useState("Not select yet")
 //...storre..
    const {game,setGame,score,setScore}=useContext(store)
   //  const [score,setScore]=useState(0)
    console.log(score,"score")
 //........................
    console.log(game,score)
    //...evaluation question...
    const evaluate=(e)=>{
        e.preventDefault()
        console.log(Data[n].solution,Data[n].option,"eval")
        if(Data[n].solution==option){
           setScore(score+1)
        }
        setN(n+1)
        setOption("Not select yet")
        console.log(n,"nnnnnnnnnnnnnnnnnnnnnn")
    }
   //  if(n===Data.length)setGame("end")
   const finish=()=>{
      console.log("finalll",n)
      if(Data[n].solution==option){
         setScore(score+1)
      }
      setGame("end")
   }
  return (
    <div>
     <Alert.Heading variant='warning'> {n+1}.)  {Data[n].Q}</Alert.Heading>
     <Button style={{margin:"10px"}} variant="outline-primary" onClick={()=>setOption("a")}>A.) {Data[n].a}</Button>{ }
     <Button style={{margin:"10px"}} variant="outline-primary" onClick={()=>setOption("b")}>B.) {Data[n].b}</Button>{}
     <Button style={{margin:"10px"}} variant="outline-primary" onClick={()=>setOption("c")}>C.)  {Data[n].c}</Button>{}
     {/* <button>{Data[n].a}</button> */}
     {console.log(n,"----------")}
     <div className="opt">
      <h2>Your selected option:</h2>
      <Button  variant="primary" size="lg" disabled>
        {option}
      </Button>{' '}</div>
     
     {n!==Data.length-1?<div><button onClick={evaluate}>Next Question</button></div>:<div><button onClick={finish}>SUBMIT</button> </div>}
 
    </div>
  )
}

export default Quiz