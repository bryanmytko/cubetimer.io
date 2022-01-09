import React, { useEffect, useReducer } from 'react';
import '../styles/timer.css';

import Scramble from './scramble.component';
import ScrambleService from '../services/scramble.service';
import TimerReducer from '../reducers/timer.reducer';
import {
  calcRunningAverage,
  calcFastestTime,
  calcSlowestTime,
  formattedTime
} from '../util/timer.util';

const initialState = {
  running: false,
  ready: false,
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
      <div className="row">
        <div className="col s4">
          <div className="solve-times card">
            <h5>Solve Times:</h5>
            <ul>
            {
              state.solveTimes.map((t, index) => {
                return <li key={index} className="time">{formattedTime(t)}
                <button onClick={() => dispatch({ type: 'REMOVE_TIME', index })}>[x]</button>
                </li>;
              })
            }
           </ul>
          </div>
        </div>
        <div className="col s8">
          <Scramble scramble={state.scramble} />
          <div className="timer-window card">
            <span>{formattedTime(state.time, '0:00')}</span>
          </div>
          <button id="timer-btn"
            className={`black-text btn timer-btn-start ${state.ready ? 'timer-btn-ready' : '' }`}
            onClick={() => dispatch({ type: 'TOGGLE' })}>Press spacebar or click to begin!</button>
          <div className="card row">
            <div className="col s6 left-align">
              <p>Cubes Solved: {state.solveTimes.length}</p>
              <p>Average: {formattedTime(calcRunningAverage(state.solveTimes))}</p>
            </div>
            <div className="col s6 right-align">
              <p>Fastest: {formattedTime(calcFastestTime(state.solveTimes))}</p>
              <p>Slowest: {formattedTime(calcSlowestTime(state.solveTimes))}</p>
            </div>
          </div>
        </div>
      </div>
    </div>;
}

export default Timer;
