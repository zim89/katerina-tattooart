'use client';
import { DatePicker } from '@/components/DatePicker';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from '@/components/ui/select';
import { yupResolver } from '@hookform/resolvers/yup';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import {
  clearAllBodyScrollLocks,
  disableBodyScroll,
  enableBodyScroll,
} from 'body-scroll-lock';
import clsx from 'clsx';
import { Clock, X } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { Controller, useForm } from 'react-hook-form';
import InputMask from 'react-input-mask';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import * as yup from 'yup';
import styles from './SessionModal.module.css';

const schema = yup
  .object({
    date: yup.date().required("Обов'язкове"),
    time: yup.string().required("Обов'язкове"),
    username: yup.string().required("Обов'язкове поле"),
    phone: yup
      .string()
      .min(14, "Обов'язкове поле")
      .max(14, "Обов'язкове поле")
      .required("Обов'язкове поле"),
    message: yup.string(),
  })
  .required();

const SessionModal = ({ toggleModal }) => {
  const targetElement = useRef(document.querySelector('.backdrop'));
  const supabase = createClientComponentClient();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      date: null,
      time: null,
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
    console.log(data);
    const { error } = await supabase.from('sessions').insert(data);
    if (error) {
      toast.error('Виникла помилка. Спробуйте пізніше');
      return;
    }
    toast.success('Дякуємо! Ми скоро зв’яжемось з Вами!');
    toggleModal();
  };

  console.log(errors);

  return (
    <div className='backdrop'>
      <div className={styles.modal}>
        <button type='button' className={styles.closeBtn} onClick={onClose}>
          <X className={styles.closeBtnIcon} />
        </button>

        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <div>
            <div className='mb-[4.5rem] flex space-x-4'>
              <div className='relative'>
                <p className={styles.errorBox}>{errors.date?.message}</p>

                <Controller
                  name='date'
                  rules={{ required: true }}
                  control={control}
                  render={({ field: { value, onChange } }) => (
                    <DatePicker
                      date={value}
                      onDateChange={onChange}
                      fromDate={Date.now()}
                    />
                  )}
                />
              </div>

              <div className='relative'>
                <p className={styles.errorBox}>{errors.time?.message}</p>

                <Controller
                  name='time'
                  rules={{ required: true }}
                  control={control}
                  render={({ field: { value, onChange } }) => (
                    <Select value={value} onValueChange={onChange}>
                      <SelectTrigger>
                        <Clock />
                      </SelectTrigger>
                      <SelectContent
                        align='center'
                        className='h-[376px] w-[134px]'
                      >
                        <Clock />
                        <SelectItem value='9:00'>9.00 AM</SelectItem>
                        <SelectItem value='10:30'>10.30 AM</SelectItem>
                        <SelectItem value='12:00'>12.00 AM</SelectItem>
                        <SelectItem value='14:00'>2.00 PM</SelectItem>
                        <SelectItem value='16:30'>4.30 PM</SelectItem>
                        <SelectItem value='18:00'>6.00 PM</SelectItem>
                        <SelectItem value='19:30'>7.30 PM</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>
            </div>
          </div>
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

          <button type='submit' className={styles.submit}>
            Записатись
          </button>
        </form>
      </div>
    </div>
  );
};
export default SessionModal;
