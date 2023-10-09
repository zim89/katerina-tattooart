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

  // TODO: Do something on error...
  const { data: images } = await query;
  const { data: types } = await supabase.from('gallery-types').select();

  types.unshift(DEFAULT_OPTION);

  return (
    <section className='section'>
      <div className='container'>
        <div className='md:flex md:items-end md:justify-between'>
          {/* TODO: remove hardcoded values */}
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
