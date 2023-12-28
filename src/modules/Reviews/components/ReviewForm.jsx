'use client';
import { useEffect, useState } from 'react';
import { Trash2 } from 'lucide-react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import clsx from 'clsx';

import LoadingOverlay from '@/components/LoadingOverlay';
import { useUserContext } from '@/context/userContext';
import { schemas } from '@/helpers';
import reviewsApi from '@/utils/supabase/api/reviewApi';

const ReviewForm = ({ closeModal, router }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [review, setReview] = useState(null);
  const { currentUser } = useUserContext();

  const {
    formState: { errors },
    setValue,
    getValues,
    handleSubmit,
    register,
  } = useForm({
    defaultValues: {
      name: '',
      review: '',
    },
    resolver: yupResolver(schemas.review),
  });

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const review = await reviewsApi.findOne(currentUser.id);
      setIsLoading(false);

      if (review) {
        setReview(review);
        setValue('name', review.name);
        setValue('review', review.review);
      }
    })();
  }, [currentUser.id, setValue]);

  const onSubmit = async (formData) => {
    if (
      review &&
      review.name === getValues('name') &&
      review.review === getValues('review')
    ) {
      closeModal();
      return;
    }

    if (review) {
      setIsLoading(true);
      await reviewsApi.update(currentUser, review.id, formData);
      setIsLoading(false);
      closeModal();
      return;
    }

    setIsLoading(true);
    await reviewsApi.create(currentUser, formData);
    setIsLoading(false);
    closeModal();
  };

  const onDelete = async (id) => {
    setIsLoading(true);
    await reviewsApi.remove(id, currentUser.id);
    setIsLoading(false);
    closeModal();
  };

  return (
    <div className='relative overflow-hidden rounded-xl border border-primary bg-dark-slate px-4 pb-8 pt-20 md:border-1.5 md:px-8 md:pl-6 md:pr-12 md:pt-8 xl:pb-10 xl:pr-6 xl:pt-10'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='relative mb-5 md:mb-6'>
          {errors.name && (
            <p className='absolute -top-4 left-0 text-xs text-[#A30E0E] md:-top-5 md:text-sm'>
              {errors.name?.message}
            </p>
          )}
          <input
            {...register('name', { required: true })}
            autoComplete='off'
            className={clsx(
              'input',
              'w-1/2',
              errors.name && '!border-[#A30E0E]'
            )}
            placeholder='Ім’я:'
          />
        </div>

        <div className={clsx('relative', review ? 'mb-3' : 'mb-6')}>
          {errors.review && (
            <p className='absolute -top-4 left-0 text-xs text-[#A30E0E] md:-top-5 md:text-sm'>
              {errors.review?.message}
            </p>
          )}
          <textarea
            {...register('review', { required: true })}
            className={clsx('input', errors.review && '!border-[#A30E0E]')}
            placeholder='Повідомлення:'
            rows={5}
          />
        </div>

        {review && (
          <button
            type='button'
            className='group mb-2 ml-auto flex gap-1 transition-colors md:gap-2'
            onClick={() => onDelete(review.id)}
          >
            <span className='text-sm group-hover:text-white md:text-base xl:text-lg'>
              Видалити
            </span>
            <Trash2 className='h-4 w-4 stroke-1 group-hover:text-white md:h-5 md:w-5 xl:h-6 xl:w-6' />
          </button>
        )}

        <button className='btnSubmit mx-auto block' type='submit'>
          {review ? 'Зберегти зміни' : 'Додати відгук'}
        </button>
      </form>

      {isLoading && <LoadingOverlay />}
    </div>
  );
};
export default ReviewForm;
