import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const supabase = createClientComponentClient();

const create = async (formData) => {
  const { data, error } = await supabase.from('consultation').insert(formData);

  if (error) {
    toast.error('Виникла помилка. Спробуйте пізніше');
    console.log(error);
    return;
  }

  toast.success('Дякуємо! Ми скоро зв’яжемось з Вами!');
  return data;
};

const consultationAPI = {
  create,
};

export default consultationAPI;
