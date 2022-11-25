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

  const playing = () => {
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

const endGame = () => {
  return (
    <div>
      <h1>Game Over</h1>
      <button className='button' onClick={() => setScore(0)}>Start Game</button>
    </div>
  )
} 

//   useEffect(() => {
//     if (score === 5){
//       return (<div>
//         <h1>Game Over</h1>
//       </div>
//       )
//     }
//  })

//   return (
//     <div className="App">
//       <div className='click'>
//         <h1>Click a Mole</h1>
//       </div>
//       <div className=''>
//         <b>{score}</b>
//         {createMoleHill()}
//       </div>
//     </div>
//   );

return (
  <div>
    {(score === 10) ? endGame() : playing()}
  </div>
)

}

export default App;
