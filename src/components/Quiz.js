import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

import Data from "./Data";
import { useState } from "react";
import { useContext } from "react";
import { store } from "../App";
import End from "./End";
const arr = [false, false, false];
const Iterableoptions=["a","b","c"]
const Quiz = () => {
  const [n, setN] = useState(0);
  const [option, setOption] = useState("Not select yet");
  const [optionArr, setOptionArr] = useState([]);
  //   disabling button
  const [dis, setDis] = useState([...arr]);
  const [disValue, setDisValue] = useState();
  // testing for backfunction whether it is trigger or not
  const [backfunction, setBackfunction] = useState(false);
  //...storre.....
  const { game, setGame, score, setScore,tick,setTick } = useContext(store);
  //  const [score,setScore]=useState(0)
  // console.log(score, "score");
  //........................
  // console.log(game, score);
  //...evaluation question...
  const evaluate = (e) => {
    setDis([...arr]);
    e.preventDefault();
    // let temArr=[...optionArr]
    // temArr.push(option)
    // optionArr is used to keep track of option that is going to use in the backfunction
    if (optionArr[n] == undefined) {
      setOptionArr([...optionArr, option]);
      setOption("Not select yet");
    } else {
      let temp = [...optionArr];
      console.log(optionArr, "optionnnnnnnnn1");
      temp.splice(n, 1, option);
      // console.log(temp.splice(n-1,1,option),"splice")
      // setOption(option)
      console.log(temp);
      setOptionArr([...temp]);
      if (optionArr[n + 1]) {
        setOption(optionArr[n + 1]);
        let text;
        console.log("switcheddddddddddddddddddd");
        switch (optionArr[n + 1]) {
          case "a":
            text = 0;
            break;
          case "b":
            text = 1;
            break;
          case "c":
            text = 2;
            break;
          default:
            console.log("defaulttttttttttttttttttttttttttttttttttttt");
        }
        console.log(n, text, optionArr[n - 1], "textttttttttttt");
        // // const updatedList = dis.map((val, index) => index === text);
        const updatedArr = [...arr];
        updatedArr[text] = !updatedArr[text];
        setDis([...updatedArr]);
      } else {
        setOption("Not select yet");
      }
    }
    // don't need this evaluation bcoz we all evaluated at the end i.e, when click on submit button
    // console.log(Data[n].solution, Data[n].option, "eval");
    // if (Data[n].solution == option) {
    //   setScore(score + 1);
    // }

    console.log(n, "testtttttinggggg");
    // console.log(optionArr,"option arrrrrrrrrrrr")
    setN(n + 1);
    setDisValue("")
    console.log(n, "testtttttinggggg1");
    // console.log(dis,"hhhhhhhhhhhhhhhhhhhhhhh")
    // console.log(n, "nnnnnnnnnnnnnnnnnnnnnn");
  };
  //  function for backward and forward
  const BackwardandForward = () => {
    setN((prev) => prev - 1);
    //  let temp=n
    var text;
    switch (optionArr[n - 1]) {
      case "a":
        text = 0;
        break;
      case "b":
        text = 1;
        break;
      // case "c":
      //   text = 2;
      //   break;
      default:
        text = 2;
    }
    // console.log(n, text, optionArr[n - 1], "textttttttttttt");
    // const updatedList = dis.map((val, index) => index === text);
    const updatedArr = [...arr];
    updatedArr[text] = !updatedArr[text];
    setDis([...updatedArr]);
    setOption(optionArr[n - 1]);
  };
   // going back function..............................................
   const handleBack = (e) => {
    BackwardandForward();
  };
  // ************************************************************************88
  console.log(optionArr, "option arrrrrrrrrrrr");
  //  if(n===Data.length)setGame("end")
  const finish = () => {
    console.log(optionArr, "finallll");
    setOption(option);
    let t = [...optionArr, option];
    // setOptionArr([...t])
    setTick([...t])//storing option in global state used in end component
    console.log(t, "finalll222");
    let scoreTemp=score
    Data.map((item, index) => {
      console.log(t[index], item.solution);
      if (t[index] == item.solution) {
        // setScore(score + 1);
        // setScore((prev)=>prev+1)   alternative wayyy
        scoreTemp+=1
        console.log("enteredddddddddddddddd")
        console.log(score)
      }

    });
    setScore(scoreTemp)
    setGame("end");
  };

  const Option1 = (e) => {
    console.log(e.target.disabled);
    // e.target.disabled=!dis[0]
    console.log(e.target.disabled);
    setOption("a");
    setDisValue(0);     // const updatedArray = [...arr];
    //   updatedArray[0] = !updatedArray[0];
    //   setDis([...updatedArray]);
    // console.log(dis);
    console.log("option1 selected");
  };
  const Option2 = (e) => {
    console.log(e.target.disabled);
    // e.target.disabled=!dis[1]
    setOption("b");
    setDisValue(1);    // const updatedArray = [...arr];
    // updatedArray[1] = !updatedArray[1];
    // setDis([...updatedArray]);
    console.log(dis);
  };
  console.log(dis,"opt2222222222222222222222")
  const Option3 = (e) => {
    console.log(e.target.disabled);
    // e.target.disabled=!dis[2]
    setOption("c");
    setDisValue(2);
    // const updatedArray = [...arr];
    // updatedArray[2] = !updatedArray[2];
    // setDis([...updatedArray]);
    console.log(dis);
  };
 
  useEffect(() => {
    // setDis([...arr]);
    // if(disValue=="a"){
    //   setDisValue()
    // }
    // switch(disValue){
    //   case "a":
    //     setDisValue(0)
    //     break
    //   case "b":
    //     setDisValue(1)
    //     break
    //   case "c":
    //     setDisValue(2)  
    //     break
    //     default:
    //       console.log("iam default..............")

    // }
    console.log(disValue,"converteddddddddddddisvalue")
    if (disValue > -1) {
    //   console.log("entered here");
    //   // const updatedList = dis.map((val, index) => index === disValue);
    //   // console.log(updatedList,"updated list")
      const updatedArray = [...arr];
      updatedArray[disValue] = !updatedArray[disValue];
      setDis([...updatedArray]);
    }

    console.log(arr, dis, "use");
  }, [disValue]);
  console.log(dis, "optionArrrrrrrdissssssssssssssssssssssssssss");
  return (
    <div className="quiz-container">
      <div className="questions-container">
        <div className="questions">
          <h2 >{`${n + 1}.) ${Data[n].Q}`}</h2>
          <button
            style={{ margin: "10px" }}
            // variant="outline-primary"
            onClick={Option1}
            disabled={dis[0]}
          >
            {`A.) ${Data[n].a}`}
          </button>
          <button
            style={{ margin: "10px" }}
            // variant="outline-primary"
            // type="button" class="btn btn-outline-warning"
            onClick={Option2}
            disabled={dis[1]}
          >
            {`B.) ${Data[n].b}`}
          </button>
          <button
            style={{ margin: "10px" }}
            // variant="primary"
            onClick={Option3}
            disabled={dis[2]}
          >
            {`C.) ${Data[n].c}`}
          </button>
        </div>
        {n !== Data.length - 1 ? (
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              gap: "1rem",
            }}
          >
            {n > 0 && <Button onClick={handleBack}>Back</Button>}
            <Button onClick={evaluate}>Save & Next</Button>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              gap: "1rem",
            }}
          >
            <Button onClick={handleBack}>Back</Button>
            <Button onClick={finish}>SUBMIT</Button>{" "}
          </div>
        )}
      </div>
      <div className="selected-option">
        <button className="selectedoptionbutton" disabled={dis}>
          {option}
        </button>
        <p>
          <b>Your selected option</b>
        </p>
      </div>
    </div>
  );
};

export default Quiz;
