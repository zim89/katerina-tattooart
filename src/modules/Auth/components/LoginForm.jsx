'use client';
import { yupResolver } from '@hookform/resolvers/yup';
import clsx from 'clsx';
import { Eye, EyeOff } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { useUserContext } from '@/context/userContext';
import { schemas } from '@/helpers';
import authAPI from '@/utils/supabase/api/authApi';

const LoginForm = ({ closeModal, toggleAuth, setIsLoading }) => {
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
    resolver: yupResolver(schemas.auth),
  });

  const onSubmit = async ({ email, password }) => {
    setIsLoading(true);
    const { user, error } = await authAPI.login({
      email: email.trim(),
      password: password.trim(),
    });
    setIsLoading(false);

    if (error) {
      toast.error('Невірний email або пароль');
      return;
    }

    logIn(user);
    toast.success('Ви успішно увійшли!');
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
          placeholder='Електрона пошта'
          autoComplete='off'
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
        <span>Немає акаунту?</span>
        <span
          className='cursor-pointer text-[#52FFEA] transition-colors hover:text-[#44ECD7]'
          onClick={toggleAuth}
        >
          Зареєструватися
        </span>
      </div>

      <button type='submit' className='btnSubmit'>
        Увійти
      </button>
    </form>
  );
};
export default LoginForm;
