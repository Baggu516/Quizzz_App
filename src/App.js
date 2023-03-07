import './App.css';
///...........
import Alert from 'react-bootstrap/Alert';
//.........................
import React,{useState,createContext} from 'react';
import Menu from './components/Menu';
import Quiz from './components/Quiz';
import End from './components/End';
export const store=createContext()
function App() {
  const [game,setGame]=useState("menu")
  const [score,setScore]=useState(0)
  let globaldata={
     game:game,
     setGame:setGame,
     score:score,
     setScore:setScore
  }
  return (
    <div className="App">
      <store.Provider value={globaldata}>
      <Alert variant='warning'>
      <h1>
      <Alert.Heading variant="primary">
          Quiz APP
        </Alert.Heading></h1></Alert>  
     
      {game=="menu" && <Menu/>}
      {game=="quiz" && <Quiz/>}
      {game=="end" && <End/>}
    </store.Provider>
    </div>
  );
}

export default App;
