import React from 'react'
import { useContext } from 'react'
import {store} from '../App'
import Data from './Data'
const tempOption=["a","b","c"]
const tempData={...Data}
console.log(tempData)
const End = () => {
    const {score,setScore,tick,setTick}=useContext(store)
   console.log(tick,"tickkkkkkkkkkkkkkkkkkkkk")
  return (
    <>
    <div className="end">
        <h1>Your Score : {score}/{Data.length}</h1>
        {score<3?<p>Need to Improve</p>:<p>Good score</p>}
        </div>
        <div className="allquestions">
          <p className="heading"><b>Check-out Solutions</b></p>
          {Data.map((item,index)=> 
          <div key={index} className='singlequestion'>
           <h2>{`${index+1}.) ${item.Q}`}</h2>
           {tempOption.map((opt,i)=>
           <div key={i}>

            {opt==tick[index]?<button className="optionButton"  disabled={true}>{`${opt}.)${tempData[index][opt]} `}</button>
            :<button className="optionButton"  disabled={false}>{`${opt}.)${tempData[index][opt]} `}</button>}
            
          </div>
           )}
           <p className="solution">Solution:<span style={{color:"red",fontWeight:"700",marginLeft:"10px",margin:"10",textDecoration:"underline"}}>{item.solution}</span> </p>
          </div>
          )}
        </div>
        </>
  )
}

export default End