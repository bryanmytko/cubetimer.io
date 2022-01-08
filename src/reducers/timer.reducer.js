import ScrambleService from '../services/scramble.service';

const TimerReducer = (state, action) => {
  const calcFastestTime = (times) => {
    return Math.min(...times);
  };

  const calcSlowestTime = (times) => {
    return Math.max(...times);
  };

  const calcRunningAverage = (times) => {
    if(!times.length) return;
    return times.reduce((prev, cur) => (prev + cur))/(times.length);
  };

  switch(action.type){
    case 'TOGGLE':
      if(state.running) {
        return {
          ...state,
          running: false,
          ready: false,
          fastestTime: calcFastestTime([...state.solveTimes, state.time]),
          slowestTime: calcSlowestTime([...state.solveTimes, state.time]),
          runningAverage: calcRunningAverage([...state.solveTimes, state.time]),
          solveTimes: [...state.solveTimes, state.time],
          scramble: ScrambleService.generate()
        };
      }
      return { ...state, time: 0, ready: false, running: true };
    case 'READY':
      return state.running ? state : { ...state, ready: true };
    case 'TICK':
      return { ...state, time: state.time + 10 };
    default:
      throw new Error(`Invalid action type: ${action.type}`);
  }
};

export default TimerReducer;
