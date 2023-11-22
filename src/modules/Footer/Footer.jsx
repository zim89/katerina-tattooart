import Image from 'next/image';

import styles from './styles/footer.module.css';

import logo from '/public/icons/logo.svg';
import logoRev from '/public/icons/logo-rev.svg';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className='container'>
        <div className={styles.wrap}>
          <p className={styles.text}>Приношу біль для вашого задоволення</p>
          <ul className={styles.list}>
            <li className={styles.item}>
              <a
                className={styles.link}
                href='https://www.instagram.com/'
                rel='noopener noreferrer'
                target='_blank'
              >
                <div className={styles.thumb}>
                  <Image alt='Instagram' src='/icons/instagram.svg' fill />
                </div>
              </a>
              <span className={styles.socialLabel}>Instagram</span>
            </li>
            <li className={styles.item}>
              <a
                className={styles.link}
                href='https://www.facebook.com/'
                rel='noopener noreferrer'
                target='_blank'
              >
                <div className={styles.thumb}>
                  <Image alt='facebook' src='/icons/facebook.svg' fill />
                </div>
              </a>
              <span className={styles.socialLabel}>Facebook</span>
            </li>
            <li className={styles.item}>
              <a className={styles.link} href='tel:577807595'>
                <div className={styles.thumb}>
                  <Image
                    alt='Phone'
                    src='/icons/phone-call.svg'
                    style={styles.icon}
                    fill
                  />
                </div>
              </a>
              <span className={styles.telLabel}>577807595</span>
            </li>
          </ul>
          <p className={styles.year}>2023</p>

          <Image
            alt='Катерина Татту Лого'
            className={styles.leftLogoThumb}
            src={logo}
          />

          <Image
            alt='Катерина Татту Лого'
            className={styles.rightLogoThumb}
            src={logoRev}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
