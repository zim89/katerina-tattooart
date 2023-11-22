import { toast } from 'react-toastify';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

import 'react-toastify/dist/ReactToastify.min.css';

const supabase = createClientComponentClient();

const findAll = async () => {
  const { data, error } = await supabase
    .from('reviews')
    .select()
    .order('updated_at', { ascending: false });

  if (error) {
    console.log(error);
    return;
  }

  return data;
};

const findOne = async (user_id) => {
  const { data, error } = await supabase
    .from('reviews')
    .select()
    .match({ user_id })
    .single();

  if (error) {
    console.log('Error in findOne: ', error);
    return;
  }

  return data;
};

const update = async (review_id, formData) => {
  const { data, error } = await supabase
    .from('reviews')
    .update({ ...formData, updated_at: new Date() })
    .eq('id', review_id)
    .select()
    .single();

  if (error) {
    toast.error('Виникла помилка. Спробуйте пізніше');
    return;
  }

  toast.success('Ваш відгук успішно змінено!');
  return data;
};

const create = async (user, formData) => {
  const { data, error } = await supabase
    .from('reviews')
    .insert({ ...formData, user_id: user.id, user_avatar: user.avatar_url })
    .select()
    .single();

  if (error) {
    toast.error('Виникла помилка. Спробуйте пізніше');
    return;
  }

  toast.success('Ваш відгук успішно додано!');
  return data;
};

const reviewsAPI = { findAll, findOne, update, create };

export default reviewsAPI;
