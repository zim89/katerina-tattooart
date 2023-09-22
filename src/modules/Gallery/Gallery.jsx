import PicturesSelect from './components/PicturesSelect';
import PicturesSwiper from './components/PicturesSwiper';

const Gallery = () => {
  return (
    <section className='section'>
      <div className='container'>
        <div className='md:flex md:items-end md:justify-between'>
          {/* TODO: remove hardcoded values */}
          <h2 className='mb-4 font-raleway text-2xl/7 font-medium md:mb-8 md:text-[32px]/[38px] xl:mb-20 xl:text-[40px]/[47px]'>
            Галерея робіт
          </h2>
          <div className='mb-2 flex justify-end xl:mb-4'>
            <PicturesSelect />
          </div>
        </div>
        <PicturesSwiper />
      </div>
    </section>
  );
};

export default Gallery;
