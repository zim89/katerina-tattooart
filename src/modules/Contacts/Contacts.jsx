'use client';
import { useState } from 'react';
import InputMask from 'react-input-mask';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import clsx from 'clsx';
import { schemas } from '@/helpers';
import consultationApi from '@/utils/supabase/api/consultationApi';

const Contacts = () => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    reset,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: '',
      phone: '',
      message: '',
    },
    resolver: yupResolver(schemas.contactUs),
  });

  const onSubmit = async (formData) => {
    setIsLoading(true);
    await consultationApi.create(formData);
    reset();
    setIsLoading(false);
  };

  return (
    <div className='mb-10 md:mb-15 xl:mb-20' id='contacts'>
      <div className='container'>
        <h2 className='mb-6 text-center text-2xl font-medium leading-normal text-light-gray md:mb-7.5 md:text-2.5xl xl:mb-20 xl:text-4.5xl'>
          Зв&apos;язатись з нами
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='mx-auto block md:w-[470px] xl:w-[620px]'
        >
          <div className='mb-4 grid grid-cols-2 gap-3.5 md:mb-4.5 md:gap-4.5 xl:mb-6 xl:gap-6.5'>
            {/* Username INPUT */}
            <div className='relative'>
              {errors.username && (
                <p className='absolute -top-2.1 left-4 bg-secondary px-1 text-xs font-normal leading-normal text-[#A30E0E] md:-top-2.5 md:text-sm xl:-top-3 xl:text-base'>
                  {errors.username?.message}
                </p>
              )}

              <input
                {...register('username', { required: true })}
                className={clsx(
                  'w-full resize-none rounded-xl border-1 border-white bg-transparent p-3 outline-none placeholder:text-primary/60 md:text-lg',
                  errors.username && '!border-[#A30E0E]'
                )}
                placeholder='Ім’я:'
                autoComplete='off'
                type='text'
              />
            </div>

            {/* Phone INPUT */}
            <div className='relative'>
              {errors.username && (
                <p className='absolute -top-2.1 left-4 bg-secondary px-1 text-xs font-normal leading-normal text-[#A30E0E] md:-top-2.5 md:text-sm xl:-top-3 xl:text-base'>
                  {errors.phone?.message}
                </p>
              )}
              <Controller
                name='phone'
                rules={{ required: true }}
                control={control}
                render={({ field: { ref, ...field } }) => (
                  <InputMask
                    {...field}
                    className={clsx(
                      'w-full resize-none rounded-xl border-1 border-white bg-transparent p-3 outline-none placeholder:text-primary/60 md:text-lg',
                      errors.phone && '!border-[#A30E0E]'
                    )}
                    mask='+38\099 999-99-99'
                    placeholder='Телефон:'
                    autoComplete='off'
                    inputRef={ref}
                    error={errors.phone}
                  />
                )}
              />
            </div>
          </div>

          {/* Message INPUT */}
          <div className='relative'>
            {errors.message && (
              <p className='absolute -top-2.1 left-4 bg-secondary px-1 text-xs font-normal leading-normal text-[#A30E0E] md:-top-2.5 md:text-sm xl:-top-3 xl:text-base'>
                {errors.message?.message}
              </p>
            )}
            <textarea
              {...register('message', { required: true })}
              rows={2}
              className={clsx(
                'w-full resize-none rounded-xl border-1 border-white bg-transparent p-3 outline-none placeholder:text-primary/60 md:text-lg',
                errors.message && '!border-[#A30E0E]'
              )}
              placeholder='Повідомлення:'
            />
          </div>

          <button
            type='submit'
            disabled={isLoading}
            className={clsx('btnSubmit', 'mx-auto mt-6 block xl:mt-10')}
          >
            Відправити
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
