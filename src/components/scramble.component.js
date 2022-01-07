import { React, useState, useEffect } from 'react';

import ScrambleService from '../services/scramble.service';

const Scramble = () => {
  const [scramble, setScramble] = useState([]);

  useEffect(() => {
    setScramble(ScrambleService.generate());
  }, []);

  return <h5 className="grey lighten-3 scramble">{scramble}</h5>;
};

export default Scramble;
