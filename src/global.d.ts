declare global {
  interface TimerState {
    running: boolean;
    ready: boolean;
    time: number;
    solveTimes: Array<number>;
    scramble: string;
  }

  interface TimerStatsProps {
    solveTimes: Array<number>,
    dispatch: TimerAction
  }
}

 export {}
