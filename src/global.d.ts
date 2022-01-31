declare global {
  interface TimerState {
    running: boolean;
    ready: boolean;
    time: number;
    solveTimes: string[];
    scramble: string;
   }
 }

 export {}
