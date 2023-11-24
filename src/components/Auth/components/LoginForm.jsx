'use client';
import { yupResolver } from '@hookform/resolvers/yup';
import clsx from 'clsx';
import { Eye, EyeOff } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import * as yup from 'yup';
import styles from '../styles/AuthForm.module.css';
import userAPI from '@/supabase/api/user';
import { useUserContext } from '@/context/userContext';

const schema = yup
  .object({
    email: yup
      .string()
      .email('Введіть валідний email')
      .required("Обов'язкове поле"),
    password: yup
      .string()
      .required("Обов'язкове поле")
      .min(6, 'Пароль має містити щонайменше 6 символів'),
  })
  .required();

const LoginForm = ({ closeModal }) => {
  const [isShown, setIsShown] = useState(false);
  const { logIn } = useUserContext();
  const router = useRouter();

  const togglePassword = () => {
    setIsShown((prev) => !prev);
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
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const { error } = await userAPI.login(data);

    if (error) {
      toast.error('Невірний email або пароль');
      return;
    }

    logIn();
    toast.success('Ви успішно увійшли!');
    router.refresh();
    closeModal();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.inputField}>
        <p className={styles.errorBox}>{errors.email?.message}</p>
        <input
          {...register('email', { required: true })}
          className={clsx('input', styles.input, errors.email && styles.error)}
          placeholder='Eлектронна пошта'
          autoComplete='off'
          type='email'
          autoFocus
        />
      </div>

      <div className={styles.inputField}>
        <p className={styles.errorBox}>{errors.password?.message}</p>
        <span className={styles.showPassBtn} onClick={togglePassword}>
          {isShown ? (
            <EyeOff className={styles.showPassIcon} />
          ) : (
            <Eye className={styles.showPassIcon} />
          )}
        </span>
        <input
          {...register('password', { required: true })}
          className={clsx('input', errors.password && styles.error)}
          placeholder='Пароль...'
          autoComplete='off'
          type={isShown ? 'text' : 'password'}
        />
      </div>

      <button type='submit' className={clsx('btn', styles.submit)}>
        Увійти
      </button>
    </form>
  );
};
export default LoginForm;
