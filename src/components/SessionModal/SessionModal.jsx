'use client';
import { DatePicker } from '@/components/DatePicker';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
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
import { useEffect, useRef, useState } from 'react';
import { Controller, useForm, useWatch } from 'react-hook-form';
import InputMask from 'react-input-mask';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import * as yup from 'yup';
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

  // FIXME: We cannot make this component to use "Modal" because of html element that overlays modal and closes it instead of select
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
                        <div className='relative text-center md:w-full'>
                          <Clock className='left-0 top-0 md:absolute' />
                          <span className='hidden md:inline'>
                            {times[value] ?? 'Час'}
                          </span>
                        </div>
                        {availableTimes.map(([key, value]) => (
                          <SelectItem key={key} value={key}>
                            {value}
                          </SelectItem>
                        ))}
                        {availableTimes.length === 0 && (
                          <div className='text-center'>
                            На цю дату немає вільного часу
                          </div>
                        )}
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
