import { createClient } from '@/utils/supabase/client';
import { toast } from 'react-toastify';

const supabase = createClient();

const create = async (formData) => {
  const { data, error } = await supabase.from('consultation').insert(formData);

  if (error) {
    toast.error('Виникла помилка. Спробуйте пізніше');
    return;
  }

  toast.success(
    "Ваше повідомлення відправлене. Наш менеджер зв'яжеться з Вами найближчим часом"
  );
  return data;
};

const consultationAPI = {
  create,
};

export default consultationAPI;
