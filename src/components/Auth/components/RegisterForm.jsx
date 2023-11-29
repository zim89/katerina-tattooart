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

const RegisterForm = ({ closeModal, toggleAuth }) => {
  const [isShown, setIsShown] = useState(false);
  const router = useRouter();
  const { logIn } = useUserContext();

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
    const { email } = data;
    const { error } = await userAPI.register(data);

    if (error) {
      error.message === 'User already registered'
        ? toast.error(`Користувач ${email} вже зареєстрований!`)
        : toast.error('Невдала спроба реєстрації');
      return;
    }

    logIn();
    toast.success('Дякуємо за реєстрацію. Ваш обліковий запис створено.');
    router.refresh();
    closeModal();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='text-center'>
      <div className='relative mb-4'>
        <p className='absolute -top-4 left-0 text-xs text-[#A30E0E]'>
          {errors.email?.message}
        </p>
        <input
          {...register('email', { required: true })}
          className={clsx('input', errors.email && '!border-[#A30E0E]')}
          placeholder='Eлектронна пошта'
          type='text'
          autoFocus
        />
      </div>

      <div className='relative mb-4'>
        <p className='absolute -top-4 left-0 text-xs text-[#A30E0E]'>
          {errors.password?.message}
        </p>
        <span
          className='absolute right-3 top-1/2 flex -translate-y-1/2  items-center justify-center'
          onClick={togglePassword}
        >
          {isShown ? (
            <EyeOff className='h-6 w-6 stroke-1' />
          ) : (
            <Eye className='h-6 w-6 stroke-1' />
          )}
        </span>
        <input
          {...register('password', { required: true })}
          className={clsx('input', errors.password && '!border-[#A30E0E]')}
          placeholder='Пароль...'
          autoComplete='off'
          type={isShown ? 'text' : 'password'}
        />
      </div>

      <div className='mb-6 flex justify-between text-[13px] md:text-base'>
        <span>Вже є акаунт?</span>
        <span
          className='text-[#52FFEA] transition-colors hover:text-[#44ECD7]'
          onClick={toggleAuth}
        >
          Увійти
        </span>
      </div>

      <button type='submit' className='btnSubmit'>
        Зареєструватись
      </button>
    </form>
  );
};
export default RegisterForm;
