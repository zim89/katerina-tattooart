'use client';
import { useEffect, useRef, useState } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import {
  clearAllBodyScrollLocks,
  disableBodyScroll,
  enableBodyScroll,
} from 'body-scroll-lock';
import clsx from 'clsx';
import { format } from 'date-fns';
import { Clock, X } from 'lucide-react';
import { Controller, useForm, useWatch } from 'react-hook-form';
import InputMask from 'react-input-mask';
import { toast } from 'react-toastify';
import * as yup from 'yup';

import { DatePicker } from '@/components/DatePicker';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import 'react-toastify/dist/ReactToastify.min.css';

import styles from './SessionModal.module.css';

const times = {
  '9:00': '9.00 AM',
  '10:30': '10.30 AM',
  '12:00': '12.00 AM',
  '14:00': '2.00 PM',
  '16:30': '4.30 PM',
  '18:00': '6.00 PM',
  '19:30': '7.30 PM',
};

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
  const [availableTimes, setAvailableTimes] = useState(() =>
    Object.entries(times)
  );
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

  const selectedDate = useWatch({ control, name: 'date' });

  useEffect(() => {
    (async () => {
      if (!selectedDate) return;

      const { data, error } = await supabase
        .from('sessions')
        .select('time')
        .eq('date', format(selectedDate, 'yyyy-MM-dd'));

      if (error) return;

      setAvailableTimes(
        Object.entries(times).filter(([value]) => {
          return !data.map(({ time }) => time).includes(value);
        })
      );
    })();
  }, [supabase, selectedDate]);

  useEffect(() => {
    disableBodyScroll(targetElement);

    return () => {
      clearAllBodyScrollLocks();
    };
  });

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

  return (
    <div className='backdrop'>
      <div className={styles.modal}>
        <button className={styles.closeBtn} onClick={onClose} type='button'>
          <X className={styles.closeBtnIcon} />
        </button>

        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div className='mb-[4.5rem] flex space-x-4'>
              <div className='relative'>
                <p className={styles.errorBox}>{errors.date?.message}</p>

                <Controller
                  render={({ field: { value, onChange } }) => (
                    <DatePicker
                      date={value}
                      fromDate={Date.now()}
                      onDateChange={onChange}
                    />
                  )}
                  control={control}
                  name='date'
                  rules={{ required: true }}
                />
              </div>

              <div className='relative'>
                <p className={styles.errorBox}>{errors.time?.message}</p>

                <Controller
                  render={({ field: { value, onChange } }) => (
                    <Select onValueChange={onChange} value={value}>
                      <SelectTrigger>
                        <Clock />
                        <span className='ml-4 hidden font-inter text-lg/tight md:inline'>
                          <SelectValue aria-level={value}>
                            {times[value] ?? 'Час'}
                          </SelectValue>
                        </span>
                      </SelectTrigger>
                      <SelectContent
                        align='center'
                        className='h-[376px] w-[134px]'
                      >
                        <div>
                          <Clock className='left-6 top-4 md:absolute' />
                          <span className='hidden md:inline'>
                            {times[value] ?? 'Час'}
                          </span>
                        </div>
                        {availableTimes.map(([key, value]) => (
                          <SelectItem key={key} value={key}>
                            {value}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                  control={control}
                  name='time'
                  rules={{ required: true }}
                />
              </div>
            </div>
          </div>
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
                    mask='+38\099 9999999'
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

          <button className={styles.submit} type='submit'>
            Записатись
          </button>
        </form>
      </div>
    </div>
  );
};
export default SessionModal;
