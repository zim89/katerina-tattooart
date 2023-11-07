'use client';
import { useState, useEffect } from 'react';
import clsx from 'clsx';
import styles from './styles/price.module.css';
import Image from 'next/image';
import useScreenSize from '@/hooks/useScreenSize';

const Price = () => {
  const [imageSrc, setImageSrc] = useState('/images/price/price-bg-mob@2x.png');
  const screen = useScreenSize();

  useEffect(() => {
    if (screen.width >= 768) {
      setImageSrc('/images/price/price-bg-tablet@2x.png');
    }
    if (screen.width >= 1280) {
      setImageSrc('/images/price/price-bg-desktop@2x.png');
    }
  }, [screen]);

  return (
    <div className={styles.wrap} id='price'>
      <div className='container'>
        <h2 className={clsx('caption', styles.title)}>Ціна татуювання</h2>

        <div className={styles.content}>
          <div className={styles.thumb}>
            <div
              className={clsx(styles.bgGradientBox, styles.bgGradientToTop)}
            ></div>
            <div
              className={clsx(styles.bgGradientBox, styles.bgGradientToRight)}
            ></div>
            {/* <Image
              src={imageSrc}
              alt='Background image'
              fill
              className={styles.bgImage}
            /> */}
          </div>

          <table className={styles.table}>
            <tbody>
              <tr className={styles.row}>
                <td className={clsx(styles.text, styles.firstItem)}>
                  Мінімальна вартість
                </td>
                <td className={clsx(styles.price, styles.firstItem)}>180 zł</td>
              </tr>
              <tr className={styles.row}>
                <td className={styles.text}>Сеанс 5-7 годин Ч.Б</td>
                <td className={styles.price}>180 zł</td>
              </tr>
              <tr>
                <td className={clsx(styles.text, styles.lastItem)}>
                  Сеанс в кольорі 5-7 годин
                </td>
                <td className={clsx(styles.price, styles.lastItem)}>800 zł</td>
              </tr>
            </tbody>
          </table>

          <h3 className={styles.subtitle}>Від чого залежить вартість:</h3>

          <ul className={styles.list}>
            <li className={styles.item}>Розмір</li>
            <li className={styles.item}>Загальна складність татуювання</li>
            <li className={styles.item}>Кількість кольорів</li>
            <li className={styles.item}>Місце розташування татуювання</li>
          </ul>

          <button className={clsx('btn', styles.btn)}>
            Записатись на сеанс
          </button>
        </div>
      </div>
    </div>
  );
};

export default Price;
