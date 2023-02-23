import './App.css';
import React,{useState,createContext} from 'react';
import Menu from './components/Menu';
import Quiz from './components/Quiz';
import End from './components/End';
export const store=createContext()
function App() {
  const [game,setGame]=useState("menu")
  //const [score,setScore]=useState(0)
  return (
    <div className="App">
      <store.Provider value={[game,setGame]}>
      <h1>QUIZ APP</h1>
      {game=="menu" && <Menu/>}
      {game=="quiz" && <Quiz/>}
      {game=="end" && <End/>}
    </store.Provider>
    </div>
  );
}

export default App;
