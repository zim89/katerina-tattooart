'use client';
import { useForm, Controller } from 'react-hook-form';
import InputMask from 'react-input-mask';
import clsx from 'clsx';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import styles from './styles/contacts.module.css';

const Contacts = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      phone: '',
      message: '',
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    toast.success('Дякуємо! Ми скоро зв’яжемось з Вами!');
  };

  return (
    <div className={styles.wrap}>
      <div className='container'>
        <h2 className={styles.title}>Зв’язатись з нами</h2>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <div className={styles.metaWrap}>
            {/* Name INPUT */}
            <div className={styles.inputWrap}>
              <input
                {...register('name', { required: true })}
                className={clsx(styles.input, errors.name && styles.error)}
                placeholder='Ім’я:'
                autoComplete='off'
              />
              {errors.name && (
                <div className={styles.errorBox}>Обов'язкове поле</div>
              )}
            </div>

            {/* Phone INPUT */}
            <div className={styles.inputWrap}>
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
              {errors.phone && (
                <div className={styles.errorBox}>Обов'язкове поле</div>
              )}
            </div>
          </div>

          {/* Message INPUT */}
          <div className={styles.inputWrap}>
            <textarea
              {...register('message', { required: true })}
              rows={2}
              className={clsx(styles.input, errors.message && styles.error)}
              placeholder='Повідомлення:'
            />
            {errors.message && (
              <div className={styles.errorBox}>Обов'язкове поле</div>
            )}
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
