import "./App.css";
///...........
import Alert from "react-bootstrap/Alert";
//.........................
import React, { useState, createContext } from "react";
import Menu from "./components/Menu";
import Quiz from "./components/Quiz";
import End from "./components/End";
export const store = createContext();
function App() {
  const [game, setGame] = useState("menu");
  const [score, setScore] = useState(0);
  let globaldata = {
    game: game,
    setGame: setGame,
    score: score,
    setScore: setScore,
  };
  return (
    <div className="App">
      <store.Provider value={globaldata}>
        <Alert variant="primary">
          {/* <h1>
            <Alert.Heading variant="primary">Quiz APP</Alert.Heading>

          </h1> */}
          <b>QUIZ APP</b>
        </Alert>
        <div className="game-container">
        {game == "menu" &&<img src="/images/home1.jpg" alt="quiz" className="image" />}
          <div className="game">
            {game == "menu" && <Menu />}
            {game == "quiz" && <Quiz />}
            {game == "end" && <End />}
          </div>
        </div>
      </store.Provider>
    </div>
  );
}

export default App;
