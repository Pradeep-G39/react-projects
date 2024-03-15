import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [time, setTime] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    const runTimer = () => {
       intervalId = setInterval(() => {
        if(isTimerRunning){
        setTime(time => time+2)          
        }
      },10);
    }
    if(isTimerRunning){
      runTimer();
    }
    
    return () => {console.log("unmount");
      clearInterval(intervalId);}
  },[isTimerRunning]);
  return (    
    <>
      <h1>Stop Watch</h1>
      
      <div className='timer'>
        <span>{("0" + Math.floor(time/60000)).slice(-2) + " : "}</span>
        <span>{("0" + Math.floor(time/1000) % 60).slice(-2) + " . "}</span>
        <span>{("0" + Math.floor(time/10) % 100).slice(-2)}</span>
      </div>
      
      {(!isTimerRunning && !time) && <button id='start-btn' onClick={() => setIsTimerRunning(true)}>Start</button>}
      {isTimerRunning &&
        <button id="pause-btn" onClick={() => setIsTimerRunning(false)}>Pause</button>      
      }
      {(!isTimerRunning && !!time) && <>
      <button id = "resume-btn" onClick={() => {setIsTimerRunning(true)}}>Resume</button>
      <button id="reset-btn" onClick={() => {setIsTimerRunning(false); setTime(0)}}>Reset</button> </>} 
      
    </>
  )
}

export default App
