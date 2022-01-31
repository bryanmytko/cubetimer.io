import React from 'react';

import './style.css';

interface ScrambleProps {
  scramble: string;
}

const Scramble = (props: ScrambleProps) => <p className="scramble">{props.scramble}</p>

export default Scramble;
