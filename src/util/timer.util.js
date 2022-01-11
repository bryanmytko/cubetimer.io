const formattedTime = (t, initialValue) => {
  if(!t) return initialValue || '--';

  let str = '';

  if(t > 60000) str += `${Math.floor((t/60000) % 60)}:`;
  str += `${Math.floor((t/1000) % 60)}:`;
  str += Math.floor((t/10) % 100).toString().padStart(2, "0")

  return str;
}

const calcRunningAverage = (times) => {
  if(!times || !times.length) return;
  return times.reduce((prev, cur) => (prev + cur))/(times.length);
};

const calcao5 = (times) => {
  if(!times || (times.length < 5)) return;
  return times.slice(-5).reduce((prev, cur) => (prev + cur))/5;
}

const calcao10 = (times) => {
  if(!times || (times.length < 10)) return;
  return times.slice(-10).reduce((prev, cur) => (prev + cur))/10;
}

const calcFastestTime = (times) => {
  if(!times.length) return;
  return Math.min(...times);
};

const calcSlowestTime = (times) => {
  if(!times.length) return;
  return Math.max(...times);
};

export {
  formattedTime,
  calcRunningAverage,
  calcao5,
  calcao10,
  calcFastestTime,
  calcSlowestTime
};
