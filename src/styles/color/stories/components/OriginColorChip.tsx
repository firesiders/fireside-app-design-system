import React from 'react';

import { originColor, originColorList } from '../data/color';
import { Chip } from './Chip';

export function OriginColorChip() {
  return (
    <div className='color-chips--origin'>
      {originColorList.map((colorName) => {
        const [origin, opacity] = originColor[colorName];

        return (
          <>
            <Chip colorKey={colorName} colorInfo={{ hex: origin }} />
            <Chip colorKey={colorName} colorInfo={{ hex: opacity }} index='15' />
          </>
        );
      })}
    </div>
  );
}

export default OriginColorChip;
