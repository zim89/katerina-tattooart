'use client';
import { yupResolver } from '@hookform/resolvers/yup';
import clsx from 'clsx';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { useUserContext } from '@/context/userContext';
import reviewsAPI from '@/supabase/api/review';

import styles from '../styles/ReviewForm.module.css';

const schema = yup
  .object({
    name: yup
      .string()
      .required("Обов'язкове поле")
      .min(3, 'Мінімум 3 символи')
      .max(15, 'Максимум 15 символів'),
    review: yup
      .string()
      .required("Обов'язкове поле")
      .max(300, 'Максимум 300 символів'),
  })
  .required();

const ReviewForm = ({ closeModal }) => {
  const { currentUser } = useUserContext();

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm({
    defaultValues: {
      name: '',
      review: '',
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = async (formData) => {
    const review = await reviewsAPI.findOne(currentUser.id);

    if (review) {
      await reviewsAPI.update(review.id, formData);
      closeModal();
      return;
    }

    await reviewsAPI.create(currentUser, formData);
    closeModal();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.inputWrap}>
        {errors.name && (
          <p className={styles.errorBox}>{errors.name.message}</p>
        )}
        <input
          {...register('name', { required: true })}
          autoComplete='off'
          className={clsx('input', styles.input, errors.name && styles.error)}
          placeholder='Ім’я:'
        />
      </div>

      <div className={styles.inputWrap}>
        {errors.review && (
          <p className={styles.errorBox}>{errors.review.message}</p>
        )}
        <textarea
          {...register('review', { required: true })}
          className={clsx('input', errors.review && styles.error)}
          placeholder='Повідомлення:'
          rows={5}
        />
      </div>

      <button className={styles.submit} type='submit'>
        Додати відгук
      </button>
    </form>
  );
};
export default ReviewForm;
