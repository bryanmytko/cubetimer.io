class CalculateService {
  runningAverage = (times: Array<number>): number => {
    if(!times || !times.length) return 0;
    return times.reduce((prev, cur) => (prev + cur))/(times.length);
  };

  ao5 = (times: Array<number>): number => {
    if(!times || (times.length < 5)) return 0;
    return times.slice(-5).reduce((prev, cur) => (prev + cur))/5;
  }

  ao10 = (times: Array<number>):number => {
    if(!times || (times.length < 10)) return 0;
    return times.slice(-10).reduce((prev, cur) => (prev + cur))/10;
  }

  fastestTime = (times: Array<number>):number => {
    if(!times.length) return 0;
    return Math.min(...times);
  };

  slowestTime = (times: Array<number>): number => {
    if(!times.length) return 0;
    return Math.max(...times);
  };
}

export default new CalculateService();
