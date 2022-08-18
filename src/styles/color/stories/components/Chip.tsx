import React from 'react';

import { colorInfoProps } from '../data/color';

interface Props {
  colorKey: string;
  index?: string;
  colorInfo?: colorInfoProps;
}

export function Chip({ colorKey, index = '', colorInfo }: Props) {
  const color = index === 'background' ? index : `${colorKey}${index}`;

  return (
    <li
      className='color-chips__chip'
      style={{ backgroundColor: `var(--${color})` }}
      title={`var(--${color})`}>
      <div className='color-chips__chip--text'>
        <p>{color}</p>
        <p className='color-chips__code'>{colorInfo?.hex}</p>
        {colorInfo?.case && <span>{colorInfo.case}</span>}
      </div>
    </li>
  );
}
export default Chip;
