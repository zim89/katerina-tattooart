'use client';
import { yupResolver } from '@hookform/resolvers/yup';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import clsx from 'clsx';
import { Controller, useForm } from 'react-hook-form';
import InputMask from 'react-input-mask';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import * as yup from 'yup';
import styles from './styles/contacts.module.css';

const schema = yup
  .object({
    username: yup
      .string()
      .required("Обов'язкове поле")
      .min(3, 'Мінімум 3 символи')
      .max(15, 'Максимум 15 символів'),
    phone: yup
      .string()
      .required("Обов'язкове поле")
      .matches(/\+38\d{3} \d{3}-\d{2}-\d{2}/, 'Не валідний телефон'),
    message: yup
      .string()
      .required("Обов'язкове поле")
      .min(15, 'Мінімум 15 символів')
      .max(300, 'Максимум 300 символів'),
  })
  .required();

const Contacts = () => {
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
      console.log(error);
      return;
    }

    toast.success('Дякуємо! Ми скоро зв’яжемось з Вами!');
  };

  return (
    <div className={styles.wrap} id='contacts'>
      <div className='container'>
        <h2 className={styles.title}>Зв&apos;язатись з нами</h2>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <div className={styles.metaWrap}>
            {/* User Name INPUT */}
            <div className={styles.inputWrap}>
              <p className={styles.errorBox}>{errors.username?.message}</p>
              <input
                {...register('username', { required: true })}
                className={clsx(styles.input, errors.username && styles.error)}
                placeholder='Ім’я:'
                autoComplete='off'
                type='text'
              />
            </div>

            {/* Phone INPUT */}
            <div className={styles.inputWrap}>
              <p className={styles.errorBox}>{errors.phone?.message}</p>
              <Controller
                name='phone'
                rules={{ required: true }}
                control={control}
                render={({ field: { ref, ...field } }) => (
                  <InputMask
                    {...field}
                    className={clsx(styles.input, errors.phone && styles.error)}
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
          <div className={styles.inputWrap}>
            <p className={styles.errorBox}>{errors.message?.message}</p>
            <textarea
              {...register('message', { required: true })}
              rows={2}
              className={clsx(styles.input, errors.message && styles.error)}
              placeholder='Повідомлення:'
            />
          </div>

          <button type='submit' className={clsx('btnSubmit', styles.submit)}>
            Відправити
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
