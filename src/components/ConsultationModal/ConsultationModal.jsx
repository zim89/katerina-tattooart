'use client';
import { yupResolver } from '@hookform/resolvers/yup';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import clsx from 'clsx';
import { useForm, Controller } from 'react-hook-form';
import InputMask from 'react-input-mask';
import { toast } from 'react-toastify';
import * as yup from 'yup';

import Modal from '../Modal/Modal';

import 'react-toastify/dist/ReactToastify.min.css';

import styles from './ConsultationModal.module.css';

const schema = yup
  .object({
    username: yup.string().required("Обов'язкове поле"),
    phone: yup
      .string()
      .required("Обов'язкове поле")
      .matches(/\+38\d{3} \d{3}-\d{2}-\d{2}/, 'Не валідний телефон'),
    message: yup.string().required("Обов'язкове поле"),
  })
  .required();

const ConsultationModal = ({ closeModal }) => {
  const supabase = createClientComponentClient();

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
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const { error } = await supabase.from('consultation').insert(data);
    if (error) {
      toast.error('Виникла помилка. Спробуйте пізніше');
      return;
    }
    toast.success(
      "Ваше повідомлення відправлене. Наш менеджер зв'яжеться з Вами найближчим часом"
    );
    closeModal();
  };

  return (
    <Modal closeModal={closeModal}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.inputWrap}>
          <label className={styles.label}>
            <p className={styles.errorBox}>{errors.username?.message}</p>
            <input
              {...register('username', { required: true })}
              autoComplete='off'
              className={clsx('input', errors.username && styles.error)}
              placeholder='Ім’я:'
              type='text'
              autoFocus
            />
          </label>

          <label className={styles.label}>
            <p className={styles.errorBox}>{errors.phone?.message}</p>
            <Controller
              render={({ field: { ref, ...field } }) => (
                <InputMask
                  {...field}
                  autoComplete='off'
                  className={clsx('input', errors.phone && styles.error)}
                  error={errors.phone}
                  inputRef={ref}
                  mask='+38\099 999-99-99'
                  maskChar={null}
                  placeholder='Телефон:'
                />
              )}
              control={control}
              name='phone'
              rules={{ required: true }}
            />
          </label>
        </div>

        <label className={styles.label}>
          <p className={styles.errorBox}>{errors.message?.message}</p>
          <textarea
            {...register('message', { required: true })}
            className={clsx(
              'input',
              styles.input,
              errors.message && styles.error
            )}
            placeholder='Повідомлення:'
            rows={3}
          />
        </label>

        <button className={clsx('btn', styles.submit)} type='submit'>
          Замовити консультацію
        </button>
      </form>
    </Modal>
  );
};
export default ConsultationModal;
