import PicturesSelect from './components/PicturesSelect';
import PicturesSwiper from './components/PicturesSwiper';

import handTattooImage1 from '/public/images/gallery/hand-tattoo-1.jpeg';
import handTattooImage2 from '/public/images/gallery/hand-tattoo-2.jpeg';
import handTattooImage3 from '/public/images/gallery/hand-tattoo-3.jpeg';
import handTattooImage4 from '/public/images/gallery/hand-tattoo-4.jpeg';
import handTattooImage5 from '/public/images/gallery/hand-tattoo-5.jpeg';

const images = [
  handTattooImage1,
  handTattooImage2,
  handTattooImage3,
  handTattooImage4,
  handTattooImage5,
];

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
        <PicturesSwiper images={images} />
      </div>
    </section>
  );
};

export default Gallery;
