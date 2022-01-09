import ScrambleService from '../services/scramble.service';

const TimerReducer = (state, action) => {
  switch(action.type){
    case 'TOGGLE':
      if(state.running) {
        return {
          ...state,
          running: false,
          ready: false,
          solveTimes: [...state.solveTimes, state.time],
          scramble: ScrambleService.generate()
        };
      }
      return { ...state, time: 0, ready: false, running: true };
    case 'READY':
      return state.running ? state : { ...state, ready: true };
    case 'REMOVE_TIME':
      return { ...state, solveTimes: state.solveTimes.filter((el, i, arr) => el !== arr[action.index])};
    case 'TICK':
      return { ...state, time: state.time + 10 };
    default:
      throw new Error(`Invalid action type: ${action.type}`);
  }
};

export default TimerReducer;
