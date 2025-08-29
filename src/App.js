
import './App.css';
import {createContext} from "react"
import {useState} from "react"
 import Board from './components/board';
 import WinMessage from './components/winMessage';
export const MatrixContext=createContext()
function App() {
   
  const  [matrix,setMatrix]=useState({r1c1:0,r1c2:0,r1c3:0,
    r2c1:0,r2c2:0,r2c3:0,
    r3c1:0,r3c2:0,r3c3:0
  
  })
  
  const [isX,setIsX]=useState(true)
  const [retry,setRetry]=useState(false)
  const [gameOver,setGameOver]=useState(false)
  
  console.log(matrix)
  function reset(){
    setMatrix({r1c1:0,r1c2:0,r1c3:0,
      r2c1:0,r2c2:0,r2c3:0,
      r3c1:0,r3c2:0,r3c3:0
    
    })
    setGameOver(false)
    setIsX(true)
    setRetry(true)
    
  }

  return (
    <div className="App">
      <video 
      autoPlay
      loop
      muted 
      playsInline
      className="background-video">
        <source  src="/videos/cozy-background.mp4" type="video/mp4" />

      </video>
    
    <MatrixContext.Provider value={{matrix,setMatrix,isX,setIsX,retry,setRetry,gameOver,setGameOver}}>
      <div className='gameHeader'>
        {isX ? <h1>player 1 </h1> : <h1>player 2 </h1>}
         <div className='retryEmoticon' onClick={()=>{reset()}}>&#128257;</div>
      </div>
    
       <Board/>
       <WinMessage></WinMessage>
       <p className='awsome-dev'>By Ahmed Ferchichi</p>
    </MatrixContext.Provider>
    
    </div>
  );
}

export default App;
