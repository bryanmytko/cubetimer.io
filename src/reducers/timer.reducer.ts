import ScrambleService from '../services/scramble.service';

enum TimerActionKind {
  TOGGLE = 'TOGGLE',
  READY = 'READY',
  REMOVE_TIME = 'REMOVE_TIME',
  TICK = 'TICK',
  PUZZLE_TYPE = 'PUZZLE_TYPE',
}

type TimerAction =
  | { type: TimerActionKind.TOGGLE | TimerActionKind.READY | TimerActionKind.TICK }
  | { type: TimerActionKind.REMOVE_TIME, index: number }
  | { type: TimerActionKind.PUZZLE_TYPE, puzzle: string };

const TimerReducer = (state: TimerState, action: TimerAction) => {
  switch(action.type){
    case TimerActionKind.TOGGLE:
      if(state.running) {
        return {
          ...state,
          running: false,
          ready: false,
          solveTimes: [...state.solveTimes, state.time],
          scramble: new ScrambleService('3x3').generate()
        };
      }
      return { ...state, time: 0, ready: false, running: true };
    case TimerActionKind.READY:
      return state.running ? state : { ...state, ready: true };
    case TimerActionKind.REMOVE_TIME:
      return { ...state, solveTimes: state.solveTimes.filter((el, _, arr) => el !== arr[action.index])};
    case TimerActionKind.TICK:
      return { ...state, time: state.time + 10 };
    case TimerActionKind.PUZZLE_TYPE:
      return {
        ...state,
        running: false,
        solveTimes: [],
        scramble: new ScrambleService(action.puzzle).generate()
      }
  }
};

export { TimerReducer, TimerActionKind };
