import React from 'react';

import borderRadiusData from '../../data/border-radius';
import style from './BorderRadius.module.css';

export const BorderRadius = () => {
  const keys = Object.keys(borderRadiusData);

  return (
    <section className={style.borderRadius}>
      {keys.map((key) => {
        const { code, caseList } = borderRadiusData[key];
        const size = `${code * 15}px`;

        return (
          <div key={key}>
            <div
              style={{ width: size, height: size, borderRadius: `${code}px` }}
              className={style.borderRadiusItem}
            />
            <div className={style.borderRadiusInfo}>
              <p>{key}</p>
              <p className={style.borderRadiusCode}>radius: {code}</p>
              <ul style={{ padding: 0, margin: 0 }}>
                {caseList.map((text) => (
                  <li>{text}</li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default BorderRadius;
