class CalculateService {
  runningAverage = (times) => {
    if(!times || !times.length) return;
    return times.reduce((prev, cur) => (prev + cur))/(times.length);
  };

  ao5 = (times) => {
    if(!times || (times.length < 5)) return;
    return times.slice(-5).reduce((prev, cur) => (prev + cur))/5;
  }

  ao10 = (times) => {
    if(!times || (times.length < 10)) return;
    return times.slice(-10).reduce((prev, cur) => (prev + cur))/10;
  }

  fastestTime = (times) => {
    if(!times.length) return;
    return Math.min(...times);
  };

  slowestTime = (times) => {
    if(!times.length) return;
    return Math.max(...times);
  };
}

export default new CalculateService();
