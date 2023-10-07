'use client';
import { useState } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import clsx from 'clsx';

import styles from '../styles/LoginForm.module.css';

const LoginForm = ({ toggleModal }) => {
  const [isShown, setIsSHown] = useState(false);
  const router = useRouter();
  const supabase = createClientComponentClient();

  const togglePassword = () => {
    setIsSHown((isShown) => !isShown);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async ({ email, password }) => {
    await supabase.auth.signInWithPassword({
      email,
      password,
    });
    toast.success('Ви успішно увійшли!');
    router.refresh();
    toggleModal();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      {errors.email && <p className={styles.errorBox}>Обов'язкове поле</p>}

      <input
        {...register('email', { required: true })}
        className={clsx('input', styles.input, errors.email && styles.error)}
        placeholder='user@gmail.com'
        autoComplete='off'
        type='email'
      />

      {errors.password && <p className={styles.errorBox}>Обов'язкове поле</p>}
      <div className={styles.passField}>
        <button
          type='button'
          className={styles.showPassBtn}
          onClick={togglePassword}
        >
          {isShown ? (
            <EyeSlashIcon className={styles.showPassIcon} />
          ) : (
            <EyeIcon className={styles.showPassIcon} />
          )}
        </button>
        <input
          {...register('password', { required: true })}
          className={clsx('input', errors.password && styles.error)}
          placeholder='**********'
          autoComplete='off'
          type={isShown ? 'text' : 'password'}
        />
      </div>

      <button type='submit' className={styles.submit}>
        Увійти
      </button>
    </form>
  );
};
export default LoginForm;
