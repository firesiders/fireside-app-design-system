import React from 'react';

import { typeData } from '../data/type';
import { TypeBySize } from './TypeBySize';
import './Typeset.css';

export function Typeset() {
  const typeKeys = Object.keys(typeData);

  return (
    <section className='typeset'>
      {typeKeys.map((key) => {
        const [size, lineHeight] = typeData[key];

        return <TypeBySize size={size} lineHeight={lineHeight} />;
      })}
    </section>
  );
}

export default Typeset;
