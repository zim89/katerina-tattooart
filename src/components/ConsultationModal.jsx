'use client';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import InputMask from 'react-input-mask';
import clsx from 'clsx';
import 'react-toastify/dist/ReactToastify.min.css';
import Modal from './Modal';
import LoadingOverlay from './LoadingOverlay';
import { schemas } from '@/helpers';
import consultationApi from '@/utils/supabase/api/consultationApi';

const ConsultationModal = ({ closeModal }) => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: '',
      phone: '',
      message: '',
    },
    resolver: yupResolver(schemas.consultation),
  });

  const onSubmit = async (formData) => {
    setIsLoading(true);
    await consultationApi.create(formData);
    setIsLoading(false);
    closeModal();
  };

  return (
    <Modal closeModal={closeModal}>
      <div className='relative overflow-hidden rounded-xl border border-primary bg-dark-slate px-4 pb-9 pt-16.5 md:border-1.5 md:px-10 md:pb-8 md:pt-20'>
        <form onSubmit={handleSubmit(onSubmit)} className=''>
          <div className='mb-6 flex gap-4 md:gap-6 xl:gap-6'>
            <label className='relative block grow'>
              <p className='absolute -top-4 left-0 text-xs text-[#A30E0E] md:-top-5 md:text-sm'>
                {errors.username?.message}
              </p>
              <input
                {...register('username', { required: true })}
                className={clsx(
                  'input',
                  errors.username && '!border-[#A30E0E]'
                )}
                placeholder='Ім’я:'
                autoComplete='off'
                type='text'
                autoFocus
              />
            </label>

            <label className='relative block grow'>
              <p className='absolute -top-4 left-0 text-xs text-[#A30E0E] md:-top-5 md:text-sm'>
                {errors.phone?.message}
              </p>
              <Controller
                name='phone'
                rules={{ required: true }}
                control={control}
                render={({ field: { ref, ...field } }) => (
                  <InputMask
                    {...field}
                    className={clsx(
                      'input',
                      errors.phone && '!border-[#A30E0E]'
                    )}
                    mask='+38\099 999-99-99'
                    maskChar={null}
                    placeholder='Телефон:'
                    autoComplete='off'
                    inputRef={ref}
                    error={errors.phone}
                  />
                )}
              />
            </label>
          </div>

          <label className='relative block grow'>
            <p className='absolute -top-4 left-0 text-xs text-[#A30E0E] md:-top-5 md:text-sm'>
              {errors.message?.message}
            </p>
            <textarea
              {...register('message', { required: true })}
              rows={3}
              className={clsx('input', errors.message && '!border-[#A30E0E]')}
              placeholder='Повідомлення:'
            />
          </label>

          <button
            type='submit'
            className={clsx(
              'btn',
              'btnSubmitStyled',
              'mx-auto mt-9 block rounded-xl md:mt-8 md:p-4 md:!text-lg'
            )}
          >
            Замовити консультацію
          </button>
        </form>

        {isLoading && <LoadingOverlay />}
      </div>
    </Modal>
  );
};
export default ConsultationModal;
