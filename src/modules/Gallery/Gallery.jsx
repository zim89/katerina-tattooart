import PicturesSelect from './components/PicturesSelect';
import PicturesSwiper from './components/PicturesSwiper';
import styles from './styles/styles.module.css';

const Gallery = () => {
  return (
    <section className='section'>
      <div className='container'>
        <h2 className={`${styles.header} mb-4`}>Галерея робіт</h2>
        <div className='mb-2 flex justify-end'>
          <PicturesSelect />
        </div>
        <PicturesSwiper />
      </div>
    </section>
  );
};

export default Gallery;
