const cube3x3 = [
  { name: 'R', turns: ['R', 'R\'', 'R2'], restricted: ['L'] },
  { name: 'L', turns: ['L', 'L\'', 'L2'], restricted: ['R'] },
  { name: 'U', turns: ['U', 'U\'', 'U2'], restricted: ['D'] },
  { name: 'D', turns: ['D', 'D\'', 'D2'], restricted: ['U'] },
  { name: 'F', turns: ['F', 'F\'', 'F2'], restricted: ['B'] },
  { name: 'B', turns: ['B', 'B\'', 'B2'], restricted: ['F'] },
];

class CubeService {
  constructor() {
    this.scrambleLength = 21;
  }

  /* @TODO This needs to take into account restricted and duplicate turns */
  scramble() {
    return [...Array(this.scrambleLength).keys()].map(() => {
      const face = cube3x3[this.randInt(0, cube3x3.length - 1)];

      return face.turns[this.randInt(0, face.turns.length - 1)];
    });
  }

  randInt(a, b) {
    const lower = Math.min(a, b);
    const upper = Math.max(a, b);
    const diff = upper - lower;

    return Math.floor((Math.random() * (diff + 1)) + lower);
  }
}

export default new CubeService();
