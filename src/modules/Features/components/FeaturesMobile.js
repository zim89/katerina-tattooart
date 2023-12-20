'use client';

import React, { useRef } from 'react';
import { cn } from '@/lib/utils';
import styles from '../styles/FeaturesMobile.module.css';

export default function FeaturesMobile({ setIndex }) {
  const nav = useRef(null);

  const handleFeatureClick = (e) => {
    const target = e.target;
    setIndex(target.dataset.index);

    if (target.classList.contains(styles.active)) return;

    const active = nav.current?.querySelector(`.${styles.active}`);

    if (active) {
      active.className = target.className;
    }

    target.classList.remove(styles.prev, styles.next);
    target.classList.add(styles.active);

    const prev = nav.current?.querySelector(`.${styles.prev}`);
    const next = nav.current?.querySelector(`.${styles.next}`);

    prev?.classList.replace(styles.prev, styles.next);
    next?.classList.replace(styles.next, styles.prev);
  };

  return (
    <div ref={nav} className='flex justify-center overflow-hidden'>
      <div className='relative h-7'>
        <button
          className={cn(styles.feature, styles.prev)}
          onClick={handleFeatureClick}
          data-index='tab2'
        >
          Професійність
        </button>
        <button
          className={cn(styles.feature, styles.active)}
          onClick={handleFeatureClick}
          data-index='tab1'
        >
          Унікальний дизайн
        </button>
        <button
          className={cn(styles.feature, styles.next)}
          onClick={handleFeatureClick}
          data-index='tab3'
        >
          Безпека та гігієна
        </button>
      </div>
    </div>
  );
}
