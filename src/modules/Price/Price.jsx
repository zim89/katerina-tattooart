'use client';
import clsx from 'clsx';
import { useState } from 'react';

import SessionModal from '@/components/SessionModal/SessionModal';

import styles from './styles/price.module.css';

const Price = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.wrap} id='price'>
      <div className='container'>
        <h2 className={clsx('caption', styles.title)}>Ціна татуювання</h2>
      </div>
      <div className='relative mx-auto max-w-screen-xl'>
        <div className='container'>
          <div className={styles.content}>
            <div className={styles.thumb}>
              <div
                className={clsx(styles.bgGradientBox, styles.bgGradientToTop)}
              ></div>
              <div
                className={clsx(styles.bgGradientBox, styles.bgGradientToRight)}
              ></div>
            </div>

            <table className={styles.table}>
              <tbody>
                <tr className={styles.row}>
                  <td className={clsx(styles.text, styles.firstItem)}>
                    Мінімальна вартість
                  </td>
                  <td className={clsx(styles.price, styles.firstItem)}>
                    180 ₴
                  </td>
                </tr>
                <tr className={styles.row}>
                  <td className={styles.text}>Сеанс 5-7 годин Ч.Б</td>
                  <td className={styles.price}>750 ₴</td>
                </tr>
                <tr>
                  <td className={clsx(styles.text, styles.lastItem)}>
                    Сеанс 5-7 годин в кольорі
                  </td>
                  <td className={clsx(styles.price, styles.lastItem)}>800 ₴</td>
                </tr>
              </tbody>
            </table>

            <h3 className={styles.subtitle}>Від чого залежить вартість:</h3>

            <ul className={styles.list}>
              <li className={styles.item}>Розмір</li>
              <li className={styles.item}>Загальна складність татуювання</li>
              <li className={clsx(styles.item, styles.bigger)}>
                Кількість кольорів
              </li>
              <li className={clsx(styles.item, styles.bigger)}>
                Місце розташування татуювання
              </li>
            </ul>

            <button
              className={clsx('btn', styles.btn)}
              onClick={() => setIsOpen(true)}
            >
              Записатись на сеанс
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <SessionModal toggleModal={() => setIsOpen((prev) => !prev)} />
      )}
    </div>
  );
};

export default Price;
