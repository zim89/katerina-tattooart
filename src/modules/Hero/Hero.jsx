'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import clsx from 'clsx';

import useScreenSize from '@/hooks/useScreenSize';
import styles from './styles/hero.module.css';

const Hero = () => {
  const [imageSrc, setImageSrc] = useState(
    '/images/hero/mobile-hero-img@2x.png'
  );
  const screen = useScreenSize();

  useEffect(() => {
    if (screen.width >= 768) {
      setImageSrc('/images/hero/tablet-hero-img@2x.png');
    }
    if (screen.width >= 1280) {
      setImageSrc('/images/hero/desktop-hero-img@2x.png');
    }
  }, [screen]);

  return (
    <div className={styles.hero}>
      <div className='container'>
        <div className={styles.wrap}>
          <div className={styles.imageThumb}>
            <Image
              alt='Hero image'
              src={imageSrc}
              fill
              placeholder='blur'
              blurDataURL={imageSrc}
              sizes='(max-width: 767px) 100vw, (max-width: 1279px 50vw, 33vw'
            />
          </div>

          {/* Title */}
          <div className={styles.titleWrap}>
            <span className={styles.title}>Katerina</span>
            <span className={styles.title}>Tattooart</span>
          </div>

          {/* Slogan */}
          <p className={clsx(styles.slogan, styles.sloganLeft)}>
            Приношу біль для
          </p>
          <p className={clsx(styles.slogan, styles.sloganRight)}>
            вашого задоволення
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
