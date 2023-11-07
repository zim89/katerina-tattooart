import clsx from 'clsx';
import styles from './styles/hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className='container'>
        <div className={styles.wrap} id='hero'>
          {/* Title */}
          <div className={styles.titleWrap}>
            <span className={styles.title}>Katerina</span>
            <span className={styles.title}>Tattooart</span>
          </div>

          {/* Slogan */}
          <div className={styles.sloganWrap}>
            <p className={clsx(styles.slogan, styles.sloganLeft)}>
              Приношу біль для
            </p>
            <p className={clsx(styles.slogan, styles.sloganRight)}>
              вашого задоволення
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
