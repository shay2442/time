import {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [time, setTime] = useState(0)
  const [timerOn, setTimerOn] = useState(true)

  useEffect(() => {
    <div>{time}</div>
    let interval = null
    if(timerOn) {
     interval = setInterval(() => {
       setTime(prevTime => prevTime + 10)
     },10)

    }else {
      clearInterval(interval)
    }
    return () => clearInterval(interval)

  },[timerOn])
  return (
    <div className="App">
    <span>{("0" + Math.floor((time /60000) % 60)).slice(-2)}</span><br/>
    <button onClick={() => setTimerOn(true)}>Start</button>
    <button onClick={() => setTimerOn(false)}>Stop</button>
    <button onClick={() => setTime(0)}>Reset</button>
    </div>
  );
}

export default App;
