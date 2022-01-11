import { cube3x3, cube4x4 } from '../lib/cubes';

const puzzles = {
  '3x3': cube3x3,
  '4x4': cube4x4
};

class ScrambleService {
  constructor(puzzle) {
    this.puzzle = puzzles[puzzle] || cube3x3;
    this.scrambleLength = 21;
  }

  generate = () => {
    const moves = [];
    let currMove, currFace, prevFace;

    for(let i=0; i<this.scrambleLength; i++){
      currFace = this.getRandomFace(prevFace);
      currMove = this.getRandomMove(currFace);

      moves.push(currMove);
      prevFace = currFace;
    }

    return moves.join(' ');
  }

  randInt = (a, b) => {
    const lower = Math.min(a, b);
    const upper = Math.max(a, b);
    const diff = upper - lower;

    return Math.floor((Math.random() * (diff + 1)) + lower);
  }

  getRandomFace = (prevFace) => {
    let randomFace;

    do {
      randomFace = this.puzzle[this.randInt(0, this.puzzle.length - 1)];
    } while(!this.isValidFace(randomFace, prevFace))

    return randomFace;
  }

  getRandomMove = (face) => {
    return face.turns[this.randInt(0, face.turns.length - 1)];
  }

  isValidFace = (curr, prev) => {
    const prevFace = prev || {};
    return (curr.name !== prevFace.name)
      && (curr.restricted.indexOf(prevFace.name) === -1);
  }
}

export default ScrambleService;
