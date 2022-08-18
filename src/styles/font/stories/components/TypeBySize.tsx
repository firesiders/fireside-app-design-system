import React from 'react';

import { Type } from './Type';

interface Props {
  size: string;
  lineHeight: string;
}

export function TypeBySize({ size, lineHeight }: Props) {
  return (
    <div style={{ lineHeight }} className='typeset__inner'>
      <Type size={size} fontWeight={400} />
      <Type size={size} fontWeight={500} />
      <Type size={size} fontWeight={700} />
    </div>
  );
}

export default TypeBySize;
