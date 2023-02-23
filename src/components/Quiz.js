import React from 'react'
import Data from './Data'   
import { useState } from 'react'
import { useContext } from "react"
import { store } from "../App"
import End from './End'
const Quiz = () => {
    const [n,setN]=useState(0)
    const [option,setOption]=useState()
 //...storre..
    const [game,setGame]=useContext(store)
    const [score,setScore]=useState(0)
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
        console.log(n,"nnnnnnnnnnnnnnnnnnnnnn")
    }
  return (
    <div>
     <h1>{Data[n].Q}</h1>
     <button onClick={()=>setOption("a")}>A.{Data[n].a}</button><br/>
     <button onClick={()=>setOption("b")}>B.{Data[n].b}</button><br/>
     <button onClick={()=>setOption("c")}>C.{Data[n].c}</button><br/>
     {/* <button>{Data[n].a}</button> */}
     {console.log(n,"----------")}
     {n!=Data.length-1?<div><button onClick={evaluate}>Next Question</button></div>:<div><End score={score}/></div> }
    </div>
  )
}

export default Quiz