'use client';
import { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock';

import styles from '../styles/modal.module.css';
import clsx from 'clsx';

const ReviewModal = ({ showModal }) => {
  const targetElement = useRef(document.querySelector('.backdrop'));

  useEffect(() => {
    disableBodyScroll(targetElement);

    return () => {
      clearAllBodyScrollLocks();
    };
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      message: '',
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    toast.success('Ваш відгук успішно додано!');
    enableBodyScroll(targetElement);
    showModal();
  };

  const onClose = () => {
    enableBodyScroll(targetElement);
    showModal();
  };

  return (
    <div className='backdrop'>
      <div className={styles.modal}>
        <button type='button' className={styles.closeBtn} onClick={onClose}>
          <XMarkIcon />
        </button>

        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          {errors.name && (
            <p className={styles.errorBox}>Обов&apos;язкове поле</p>
          )}
          <input
            {...register('name', { required: true })}
            className={clsx('input', styles.input, errors.name && styles.error)}
            placeholder='Ім’я:'
            autoComplete='off'
          />

          {errors.message && (
            <p className={styles.errorBox}>Обов&apos;язкове поле</p>
          )}
          <textarea
            {...register('message', { required: true })}
            className={clsx('input', errors.message && styles.error)}
            placeholder='Повідомлення:'
            rows={5}
          />

          <button type='submit' className={styles.submit}>
            Додати відгук
          </button>
        </form>
      </div>
    </div>
  );
};
export default ReviewModal;
