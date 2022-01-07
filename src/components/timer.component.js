import React, { useState, useEffect } from 'react';
import '../styles/timer.css';

const Timer = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [ready, setReady] = useState(false);
  const [solveTimes, setSolveTimes] = useState([]);

  /* Something crazy is causing lag when we try to use this a few times in a row */
  useEffect(() => {
    let interval;

    if(running) {
      interval = setInterval(() => setTime((time) => time + 10), 10);
    }

    return () => clearInterval(interval);
  }, [running, ready, time]);

  document.addEventListener('keydown', e => {
    if(e.key !== ' ') return;
    setReady(true);
  });

  document.addEventListener('keyup', (e) => {
    if(e.key !== ' ') return;
    setReady(false);
    if(running){
      setRunning(false);
      resetTimer();
    } else {
      setRunning(true);
    }
  });

  const toggleTimer = () => {
    setReady(false);

    if(running) {
      setRunning(false);
      setSolveTimes(s => [...s, time]);
      resetTimer();
    } else {
      setRunning(true);
    }
  };

  /* This will be invoked when the timer stops and time is record. */
  const resetTimer = () => {
    setRunning(false);
    setTime(0);
  };

  return <div className="container timer-container">
    <div className="solve-times card">
      {
        solveTimes.map((t, index) => {
          return <span key={index} className="time">
            {Math.floor((time/60000) % 60).toString().padStart(2, "0")}:
            {Math.floor((time/1000) % 60).toString().padStart(2, "0")}:
            {Math.floor((time/10) % 100).toString().padStart(2, "0")}
           </span>;
        })
      }
    </div>
    <div className="timer-window card">
      <span className="timer-min">
        {Math.floor((time/60000) % 60).toString().padStart(2, "0")}:
      </span>
      <span className="timer-sec">
        {Math.floor((time/1000) % 60).toString().padStart(2, "0")}:
      </span>
      <span className="timer-ms">
        {Math.floor((time/10) % 100).toString().padStart(2, "0")}
      </span>
    </div>
      <button className={`btn timer-btn-start ${ready ? 'timer-btn-ready' : '' }`} onClick={toggleTimer}>Start</button>
    </div>;
}

export default Timer;
