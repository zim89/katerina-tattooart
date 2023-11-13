'use client';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useForm, Controller } from 'react-hook-form';
import InputMask from 'react-input-mask';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import clsx from 'clsx';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import styles from './ConsultationModal.module.css';
import Modal from '../Modal/Modal';

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
    </Modal>
  );
};
export default ConsultationModal;
