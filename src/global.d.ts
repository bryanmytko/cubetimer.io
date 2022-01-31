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

  interface ScrambleProps {
    scramble: string;
  }

  interface PuzzleType {
    moves: Array<MovesType>,
    final?: Array<MovesType>
  }

  interface MovesType {
    name: string,
    turns: Array<string>,
    restricted: Array<string>
  }

  interface PuzzleArray {
    [index: string]: PuzzleType
  }
}

 export {}
