'use client';
import { useRef, useEffect } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useForm, Controller } from 'react-hook-form';
import InputMask from 'react-input-mask';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import clsx from 'clsx';
import { X } from 'lucide-react';
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import styles from './ConsultationModal.module.css';

const schema = yup
  .object({
    username: yup.string().required("Обов'язкове поле"),
    phone: yup
      .string()
      .min(14, "Обов'язкове поле")
      .max(14, "Обов'язкове поле")
      .required("Обов'язкове поле"),
    message: yup.string().required("Обов'язкове поле"),
  })
  .required();

const ConsultationModal = ({ toggleModal }) => {
  const targetElement = useRef(document.querySelector('.backdrop'));
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

  useEffect(() => {
    disableBodyScroll(targetElement);

    return () => {
      clearAllBodyScrollLocks();
    };
  }, []);

  const onClose = () => {
    enableBodyScroll(targetElement);
    toggleModal();
  };

  const onSubmit = async (data) => {
    const { error } = await supabase.from('consultation').insert(data);
    if (error) {
      toast.error('Виникла помилка. Спробуйте пізніше');
      return;
    }
    toast.success(
      "Ваше повідомлення відправлене. Наш менеджер зв'яжеться з Вами найближчим часом"
    );
    toggleModal();
  };

  return (
    <div className='backdrop'>
      <div className={styles.modal}>
        <button type='button' className={styles.closeBtn} onClick={onClose}>
          <X className={styles.closeBtnIcon} />
        </button>

        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <div className={styles.inputWrap}>
            <label className={styles.label}>
              <p className={styles.errorBox}>{errors.username?.message}</p>
              <input
                {...register('username', { required: true })}
                className={clsx('input', errors.username && styles.error)}
                placeholder='Ім’я:'
                autoComplete='off'
                type='text'
                autoFocus
              />
            </label>

            <label className={styles.label}>
              <p className={styles.errorBox}>{errors.phone?.message}</p>
              <Controller
                name='phone'
                rules={{ required: true }}
                control={control}
                render={({ field: { ref, ...field } }) => (
                  <InputMask
                    {...field}
                    className={clsx('input', errors.phone && styles.error)}
                    mask='+38\099 9999999'
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

          <label className={styles.label}>
            <p className={styles.errorBox}>{errors.message?.message}</p>
            <textarea
              {...register('message', { required: true })}
              rows={3}
              className={clsx(
                'input',
                styles.input,
                errors.message && styles.error
              )}
              placeholder='Повідомлення:'
            />
          </label>

          <button type='submit' className={clsx('btn', styles.submit)}>
            Замовити консультацію
          </button>
        </form>
      </div>
    </div>
  );
};
export default ConsultationModal;
