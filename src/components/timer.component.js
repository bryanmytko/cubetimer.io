import React, { useEffect, useReducer } from 'react';
import '../styles/timer.css';

import Scramble from './scramble.component';
import ScrambleService from '../services/scramble.service';
import { formattedTime } from '../util/format';
import TimerReducer from '../reducers/timer.reducer';

const initialState = {
  running: false,
  ready: false,
  fastestTime: 0,
  slowestTime: 0,
  runningAverage: 0,
  time: 0,
  solveTimes: [],
  scramble: ScrambleService.generate()
};

const Timer = () => {
  const [state, dispatch] = useReducer(TimerReducer, initialState);

  useEffect(() => {
    let interval;

    if(state.running) {
      interval = setInterval(() => dispatch({ type: 'TICK' }), 10);
    }

    const handleKeydown = e => {
      if(e.key !== ' ') return;
      e.preventDefault();
      dispatch({ type: 'READY' });
    };

    const handleKeyup = e => {
      if(e.key !== ' ') return;
      e.preventDefault();
      dispatch({ type: 'TOGGLE' });
    };

    window.addEventListener('keydown', handleKeydown);
    window.addEventListener('keyup', handleKeyup);

    return () => {
      clearInterval(interval);
      window.removeEventListener('keydown', handleKeydown);
      window.removeEventListener('keyup', handleKeyup);
    };
  }, [state.running]);

  return <div className="container timer-container">
    <Scramble scramble={state.scramble} />
    <div className="solve-times card">
      <ul>
      {
        state.solveTimes.map((t, index) => {
          return <li key={index} className="time">{formattedTime(t)}</li>;
        })
      }
     </ul>
    </div>
    <div className="timer-window card">
      <span>{formattedTime(state.time, '0:00')}</span>
    </div>
    <button id="timer-btn"
      className={`black-text btn timer-btn-start ${state.ready ? 'timer-btn-ready' : '' }`}
      onClick={() => dispatch({ type: 'TOGGLE' })}>Press spacebar or click to begin!</button>
    <div className="card row">
      <div className="col s6 left-align">
        <p>Cubes Solved: {state.solveTimes.length}</p>
        <p>Average: {formattedTime(state.runningAverage)}</p>
      </div>
      <div className="col s6 right-align">
        <p>Fastest: {formattedTime(state.fastestTime)}</p>
        <p>Slowest: {formattedTime(state.slowestTime)}</p>
      </div>
    </div>
    </div>;
}

export default Timer;
