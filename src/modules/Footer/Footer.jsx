import Image from 'next/image';
import styles from './styles/footer.module.css';

import logo from '/public/icons/logo.svg';
import logoRev from '/public/icons/logo-rev.svg';
import { clsx } from 'clsx';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className='container'>
        <div className={styles.wrap}>
          <p className={styles.text}>Приношу біль для вашого задоволення</p>
          <ul className={styles.list}>
            <li className={styles.item}>
              <a
                href='https://www.instagram.com/'
                className={clsx('group', styles.link)}
                target='_blank'
                rel='noopener noreferrer'
              >
                <div
                  className={clsx(
                    styles.linkIconWrap,
                    'border border-primary transition-colors duration-200 ease-linear group-hover:border-white'
                  )}
                >
                  <div className={styles.thumb}>
                    <Image src='/icons/instagram.svg' alt='Instagram' fill />
                  </div>
                </div>

                <span className={styles.socialLabel}>Instagram</span>
              </a>
            </li>
            <li className={styles.item}>
              <a
                href='https://www.facebook.com/'
                className={clsx('group', styles.link)}
                target='_blank'
                rel='noopener noreferrer'
              >
                <div
                  className={clsx(
                    styles.linkIconWrap,
                    'border border-primary transition-colors duration-200 ease-linear group-hover:border-white'
                  )}
                >
                  <div className={styles.thumb}>
                    <Image src='/icons/facebook.svg' alt='facebook' fill />
                  </div>
                </div>

                <span className={styles.socialLabel}>Facebook</span>
              </a>
            </li>
            <li className={styles.item}>
              <a href='tel:577807595' className={clsx('group', styles.link)}>
                <div
                  className={clsx(
                    styles.linkIconWrap,
                    'border border-primary transition-colors duration-200 ease-linear group-hover:border-white'
                  )}
                >
                  <div className={styles.thumb}>
                    <Image
                      src='/icons/phone-call.svg'
                      alt='Phone'
                      fill
                      style={styles.icon}
                    />
                  </div>
                </div>

                <span className={styles.telLabel}>577807595</span>
              </a>
            </li>
          </ul>
          <p className={styles.year}>2023</p>

          <Image
            src={logo}
            alt='Катерина Татту Лого'
            className={styles.leftLogoThumb}
          />

          <Image
            src={logoRev}
            alt='Катерина Татту Лого'
            className={styles.rightLogoThumb}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
