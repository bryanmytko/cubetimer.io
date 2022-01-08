import React, { useState, useEffect } from 'react';
import '../styles/timer.css';

const Timer = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [solveTimes, setSolveTimes] = useState([]);
  const [ready, setReady] = useState(false);
  const [fastestTime, setFastestTime] = useState('--');
  const [slowestTime, setSlowestTime] = useState('--');
  const [runningAverage, setRunningAverage] = useState('--');

  useEffect(() => {
    let interval;

    const handleKeydown = e => {
      if(e.key !== ' ') return;
      if(!running) setReady(true);
    };

    const handleKeyup = e => {
      if(e.key !== ' ') return;

      setReady(false);

      if(!running) {
        setRunning(true);
      } else {
        setRunning(false);
        setSolveTimes(s => [...s, time]);
        setTime(0);
        /* Not setting this fast enough? Need to research a callback or reducer solution */
        // setFastestTime(calcFastestTime(solveTimes));
        // setSlowestTime(calcSlowestTime(solveTimes));
        // setRunningAverage(calcRunningAverage(solveTimes));
      }
    };

    const calcFastestTime = (times) => {
      return formattedTime(Math.min(...times));
    };

    const calcSlowestTime = (times) => {
      return formattedTime(Math.max(...times));
    };

    const calcRunningAverage = (times) => {
      return formattedTime(times.reduce((prev, cur) => (prev + cur))/times.length);
    };

    window.addEventListener('keydown', handleKeydown);
    window.addEventListener('keyup', handleKeyup);

    if(running) {
      interval = setInterval(() => setTime((time) => time + 10), 10);
    }

    return () => {
      clearInterval(interval);
      window.removeEventListener("keydown", handleKeydown);
      window.removeEventListener("keyup", handleKeyup);
    };
  }, [time, running]);

  const toggleTimer = () => {
    /* @TODO fix bug: If you start time with click and then stop with keyboard
     * it records the time but doesn't actually stop the timer.
     * Something isn't updating properly.*/
    setReady(false);

    if(!running) {
      setRunning(true);
    } else {
      setRunning(false);
      setSolveTimes(s => [...s, time]);
      setTime(0);
    }
  };

  const formattedTime = t => {
    let str = '';

    if(t > 60000) str += `${Math.floor((t/60000) % 60)}:`;
    str += `${Math.floor((t/1000) % 60)}:`;
    str += Math.floor((t/10) % 100).toString().padStart(2, "0")

    return str;
  }

  return <div className="container timer-container">
    <div className="solve-times card">
      <ul>
      {
        solveTimes.map((t, index) => {
          return <li key={index} className="time">{formattedTime(t)}</li>;
        })
      }
     </ul>
    </div>
    <div className="timer-window card">
      <span className="timer-min">
        {(time >= 60000) ? `${Math.floor((time/60000) % 60).toString().padStart(2, "0")}:` : ''}
      </span>
      <span className="timer-sec">
        {Math.floor((time/1000) % 60).toString().padStart(2, "0")}:
      </span>
      <span className="timer-ms">
        {Math.floor((time/10) % 100).toString().padStart(2, "0")}
      </span>
    </div>
    <button className={`btn timer-btn-start ${ready ? 'timer-btn-ready' : '' }`} onClick={toggleTimer}>Start</button>
    <div className="card row">
      <div className="col s6">
        <p>Average: {runningAverage}</p>
      </div>
      <div className="col s6">
        <p>Fastest: {fastestTime}</p>
        <p>Slowest: {slowestTime}</p>
      </div>
    </div>
    </div>;
}

export default Timer;
