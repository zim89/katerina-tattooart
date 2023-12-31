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
                href='https://www.instagram.com/'
                className={styles.link}
                target='_blank'
                rel='noopener noreferrer'
              >
                <div className={styles.thumb}>
                  <Image src='/icons/instagram.svg' alt='Instagram' fill />
                </div>
              </a>
              <span className={styles.socialLabel}>Instagram</span>
            </li>
            <li className={styles.item}>
              <a
                href='https://www.facebook.com/'
                className={styles.link}
                target='_blank'
                rel='noopener noreferrer'
              >
                <div className={styles.thumb}>
                  <Image src='/icons/facebook.svg' alt='facebook' fill />
                </div>
              </a>
              <span className={styles.socialLabel}>Facebook</span>
            </li>
            <li className={styles.item}>
              <a href='tel:577807595' className={styles.link}>
                <div className={styles.thumb}>
                  <Image
                    src='/icons/phone-call.svg'
                    alt='Phone'
                    fill
                    style={styles.icon}
                  />
                </div>
              </a>
              <span className={styles.telLabel}>577807595</span>
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
