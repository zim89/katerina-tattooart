'use client';
import { yupResolver } from '@hookform/resolvers/yup';
import clsx from 'clsx';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import * as yup from 'yup';
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

const ReviewForm = ({ closeModal, user }) => {
  console.log(user.user_metadata);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      message: '',
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    toast.success('Ваш відгук успішно додано!');
    closeModal();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='w-full md:w-[651px] xl:w-[710px]'
    >
      {errors.name && <p className={styles.errorBox}>Обов&apos;язкове поле</p>}
      <input
        {...register('name', { required: true })}
        className={clsx('input', styles.input, errors.name && styles.error)}
        placeholder='Ім’я:'
        autoComplete='off'
      />

      {errors.review && (
        <p className={styles.errorBox}>Обов&apos;язкове поле</p>
      )}
      <textarea
        {...register('review', { required: true })}
        className={clsx('input', errors.review && styles.error)}
        placeholder='Повідомлення:'
        rows={5}
      />

      <button type='submit' className={styles.submit}>
        Додати відгук
      </button>
    </form>
  );
};
export default ReviewForm;
