'use client';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useEffect, useState } from 'react';

import PicturesSelect from './components/PicturesSelect';
import PicturesSwiper from './components/PicturesSwiper';

const DEFAULT_OPTION = { value: '*', label: 'Усi' };

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [types, setTypes] = useState([DEFAULT_OPTION]);
  const [selectedType, setSelectedType] = useState({
    value: '*',
    label: 'Усi',
  });

  const supabase = createClientComponentClient();

  useEffect(() => {
    (async () => {
      const query = supabase
        .from('gallery')
        .select()
        .order('order', { ascending: true });

      if (selectedType.id) query.eq('type', selectedType.id);

      // TODO: Do something on error...
      const { data: images } = await query;

      setImages(images ?? []);
    })();
  }, [selectedType, supabase]);

  useEffect(() => {
    (async () => {
      // TODO: Do something on error...
      const { data: types } = await supabase.from('gallery-types').select();

      types.unshift(DEFAULT_OPTION);
      setTypes(types ?? []);
    })();
  }, [supabase]);

  const onSelect = (type) => {
    setSelectedType(type);
  };

  return (
    <section className='section'>
      <div className='container'>
        <div className='md:flex md:items-end md:justify-between'>
          {/* TODO: remove hardcoded values */}
          <h2 className='md:text-2.5xl/[38px] xl:text-4.5xl/[47px] mb-4 font-raleway text-2xl/7 font-medium md:mb-8 xl:mb-20'>
            Галерея робіт
          </h2>
          <div className='mb-2 flex justify-end xl:mb-4'>
            <PicturesSelect options={types} onSelect={onSelect} />
          </div>
        </div>
        <PicturesSwiper images={images} />
      </div>
    </section>
  );
};

export default Gallery;
