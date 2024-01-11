import { supabase } from '@/lib/config';

import PicturesSelect from './components/PicturesSelect';
import PicturesSwiper from './components/PicturesSwiper';

const DEFAULT_OPTION = { id: 0, value: '*', label: 'Усi' };

const Gallery = async ({ filter }) => {
  const query = supabase
    .from('gallery')
    .select()
    .order('order', { ascending: true });

  if (filter > 0) query.eq('type', filter);

  const { data: images, error: imagesError } = await query;

  const { data: types, error: typesError } = await supabase
    .from('gallery_types')
    .select('gallery-types (id, value, label)');

  if (imagesError || typesError)
    return (
      <section className='section' id={'gallery'}>
        <div className='container'>
          <div className='md:flex md:items-end md:justify-between' id='galery'>
            <h2 className='mb-4 font-raleway text-2xl/7 font-medium md:mb-8 md:text-2.5xl/[38px] xl:mb-20 xl:text-4.5xl/[47px]'>
              Галерея робіт
            </h2>
          </div>
          <div className='lg:bg-gallery-lg flex h-[438px] items-center justify-center rounded-xl bg-[#c3c3c3] bg-gallery-sm bg-cover bg-no-repeat text-center md:bg-gallery-md md:text-lg xl:h-[814px] xl:rounded-[20px] xl:text-2xl'>
            <p>
              Не вдалося завантажити зображення, будь ласка, спробуйте пізніше
            </p>
          </div>
        </div>
      </section>
    );

  types.forEach((entry, idx) => (types[idx] = entry['gallery-types']));
  types.unshift(DEFAULT_OPTION);

  return (
    <section className='section' id={'gallery'}>
      <div className='container'>
        <div className='md:flex md:items-end md:justify-between' id='galery'>
          <h2 className='mb-4 font-raleway text-2xl/7 font-medium md:mb-8 md:text-2.5xl/[38px] xl:mb-20 xl:text-4.5xl/[47px]'>
            Галерея робіт
          </h2>
          <div className='mb-2 flex justify-end xl:mb-4'>
            <PicturesSelect options={types} defaultId={filter} />
          </div>
        </div>
        <PicturesSwiper images={images} />
      </div>
    </section>
  );
};

export default Gallery;
