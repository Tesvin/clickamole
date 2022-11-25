import { useState, useEffect } from 'react';
import MoleContainer from './MoleContainer';
import './App.css'

function App() {

  let [score, setScore] = useState(0)

  const createMoleHill = () => {
    let hills = [];
    for(let i = 0; i < 8; i++){
      hills.push(
      <MoleContainer 
      key={i}
      setScore={setScore}
      score={score}
      />
      )
    }

    return (
      <div className=''>
        {hills}
      </div>
    )
  }

  
  useEffect(() => {
    if (score === 5){
     document.title = "end"
    }
 })

  return (
    <div className="App">
      <div className='click'>
        <h1>Click a Mole</h1>
      </div>
      <div className=''>
        <b>{score}</b>
        {createMoleHill()}
      </div>
    </div>
  );
}

export default App;
