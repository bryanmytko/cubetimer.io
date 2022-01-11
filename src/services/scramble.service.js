import {
  cube2x2,
  cube3x3,
  cube4x4,
  cube5x5,
  cube6x6,
  cube7x7,
  cubePyraminx,
  cubeMegaminx
} from '../lib/cubes';

const puzzles = {
  '2x2': cube2x2,
  '3x3': cube3x3,
  '4x4': cube4x4,
  '5x5': cube5x5,
  '6x6': cube6x6,
  '7x7': cube7x7,
  'pyraminx': cubePyraminx,
  'megaminx': cubeMegaminx
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

    if(this.puzzle.final) {
      const finalFace = moves.push(this.getRandomFace(this.puzzle.final));
      moves.push(finalFace);
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
      randomFace = this.puzzle.moves[this.randInt(0, this.puzzle.moves.length - 1)];
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
