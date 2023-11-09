'use client';
import { yupResolver } from '@hookform/resolvers/yup';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import clsx from 'clsx';
import { Eye, EyeOff } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import * as yup from 'yup';
import styles from '../styles/LoginForm.module.css';

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

const RegisterForm = ({ toggleModal }) => {
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
    resolver: yupResolver(schema),
  });

  const onSubmit = async ({ email, password }) => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    });

    if (error) {
      error.message === 'User already registered'
        ? toast.error(`Користувач ${email} вже зареєстрований!`)
        : toast.error('Невдала спроба реєстрації');
      return;
    }

    toast.success('Дякуємо за реєстрацію. Ваш обліковий запис створено.');
    router.refresh();
    toggleModal();
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
        <span
          type='button'
          className={styles.showPassBtn}
          onClick={togglePassword}
        >
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
        Зареєструватись
      </button>
    </form>
  );
};
export default RegisterForm;
