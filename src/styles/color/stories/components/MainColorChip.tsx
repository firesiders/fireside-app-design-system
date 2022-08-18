import React from 'react';

import { colorData } from '../data/color';
import { Chip } from './Chip';
import './ColorChip.css';

export function MainColorChip() {
  const colorKey = Object.keys(colorData);
  return (
    <>
      {colorKey.map((key) => {
        const { title, variation } = colorData[key];
        const colorList = Object.entries(variation);

        return (
          <>
            {title && <h3>{title}</h3>}
            <section className='color-chips'>
              {colorList.map((color) => (
                <Chip colorKey={key} colorInfo={color[1]} index={color[0]} />
              ))}
            </section>
          </>
        );
      })}
    </>
  );
}

export default MainColorChip;
