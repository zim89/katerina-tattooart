import { createClient } from '@/utils/supabase/client';
import { toast } from 'react-toastify';

const supabase = createClient();

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
    return;
  }

  return data;
};

const update = async (user, review_id, formData) => {
  const { data, error } = await supabase
    .from('reviews')
    .update({
      ...formData,
      user_avatar: user.provider === 'google' ? user.avatar_url : null,
      updated_at: new Date(),
    })
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
    .insert({
      ...formData,
      user_id: user.id,
      user_avatar: user.provider === 'google' ? user.avatar_url : null,
    })
    .select()
    .single();

  if (error) {
    toast.error('Виникла помилка. Спробуйте пізніше');
    return;
  }

  toast.success('Ваш відгук успішно додано!');
  return data;
};

const remove = async (id, user_id) => {
  const { error } = await supabase
    .from('reviews')
    .delete()
    .match({ id, user_id });

  if (error) {
    toast.error('Виникла помилка. Спробуйте пізніше');
    return;
  }

  toast.success('Ваш відгук успішно видалено!');
};

const reviewsAPI = {
  findAll,
  findOne,
  update,
  create,
  remove,
};

export default reviewsAPI;
