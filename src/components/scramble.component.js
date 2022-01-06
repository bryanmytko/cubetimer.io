import { React, useState, useEffect } from 'react';

import CubeService from '../services/cube.service';

const Scramble = () => {
  const [scramble, setScramble] = useState([]);

  useEffect(() => {
    setScramble(CubeService.scramble());
  }, []);

  return <h5 className="white scramble">{scramble.join(" ")}</h5>;
};

export default Scramble;
