import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

import Data from "./Data";
import { useState } from "react";
import { useContext } from "react";
import { store } from "../App";
import End from "./End";
const arr = [false, false, false];
const Quiz = () => {
  const [n, setN] = useState(0);
  const [option, setOption] = useState("Not select yet");
  //...storre..
  const { game, setGame, score, setScore } = useContext(store);
  //  const [score,setScore]=useState(0)
  console.log(score, "score");
  //........................
  console.log(game, score);
  //...evaluation question...
  const evaluate = (e) => {
    setDis([...arr])
    e.preventDefault();
    console.log(Data[n].solution, Data[n].option, "eval");
    if (Data[n].solution == option) {
      setScore(score + 1);
    }
    setN(n + 1);
    setOption("Not select yet");
    console.log(n, "nnnnnnnnnnnnnnnnnnnnnn");
  };
  //  if(n===Data.length)setGame("end")
  const finish = () => {
    console.log("finalll", n);
    if (Data[n].solution == option) {
      setScore(score + 1);
    }
    setGame("end");
  };
  //   disabling button
  const [dis, setDis] = useState([...arr]);
  const [disValue, setDisValue] = useState();
  const Option1 = (e) => {
    console.log(e.target.disabled);
    // e.target.disabled=!dis[0]
    console.log(e.target.disabled);
    setOption("a");
    setDisValue(0);
    // setDis([...arr])
    // dis[0]=!dis[0]
    // setDis([...dis])
    console.log(dis);
    console.log("option1 selected");
  };
  const Option2 = (e) => {
    console.log(e.target.disabled);
    // e.target.disabled=!dis[1]
    setOption("b");
    setDisValue(1);
    // setDis([...arr])
    // console.log(arr,"arrr")
    // console.log(dis,"disarr")
    // dis[1]=!dis[1]
    // setDis([...dis])
    console.log(dis);
  };
  const Option3 = (e) => {
    console.log(e.target.disabled);
    // e.target.disabled=!dis[2]
    setOption("c");
    setDisValue(2);

    console.log(dis);
  };
  useEffect(() => {
    // setDis([...arr]);
    if(disValue>-1){
      console.log("entered here");
      const updatedList = dis.map((val, index)=>index === disValue);
      // const updatedArray = [...arr];
      // updatedArray[disValue] = !updatedArray[disValue];
      setDis([...updatedList]);
    }
    
    console.log(arr, dis, "use");
  }, [disValue]);
  return (
    <div className="quiz-container">
      <div className="questions-container">
        <div className="questions">
          <h2>{`${n + 1}.) ${Data[n].Q}`}</h2>
          <Button
            style={{ margin: "10px" }}
            // variant="outline-primary"
            onClick={Option1}
            disabled={dis[0]}
          >
            {`A.) ${Data[n].a}`}
          </Button>
          <Button
            style={{ margin: "10px" }}
            // variant="outline-primary"
            onClick={
              Option2
              //    setDisValue(1)
              //    setDis([...arr])
              // dis[1]=!dis[1]
              // setDis([...dis])
            }
            disabled={dis[1]}
          >
            {`B.) ${Data[n].b}`}
          </Button>
          <Button
            style={{ margin: "10px" }}
            // variant="primary"
            onClick={
              Option3
              //    setOption("c")
              //    setDisValue(2)
              //    setDis([...arr])
              // dis[2]=!dis[2]
              // setDis([...dis])
              // console.log(dis)
              // }}
            }
            disabled={dis[2]}
          >
            {`C.) ${Data[n].c}`}
          </Button>
        </div>
        {n !== Data.length - 1 ? (
          <div>
            <Button onClick={evaluate}>Next Question</Button>
          </div>
        ) : (
          <div>
            <Button onClick={finish}>SUBMIT</Button>{" "}
          </div>
        )}
      </div>
      {/* <button>{Data[n].a}</button> */}
      <div className="selected-option">
        <Button variant="primary" size="lg" disabled={dis}>
          {option}
        </Button>
        <p>
          <b>Your selected option</b>
        </p>
      </div>
    </div>
  );
};

export default Quiz;
