'use client';
import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { X } from 'lucide-react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock';
import clsx from 'clsx';

import styles from '../styles/AuthModal.module.css';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const AuthModal = ({ toggleModal }) => {
  const [isLogin, setIsLogin] = useState(true);
  const targetElement = useRef(document.querySelector('.backdrop'));

  const toggleAuth = () => {
    setIsLogin(!isLogin);
  };

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

  return (
    <div className='backdrop'>
      <div className={styles.modal}>
        <button type='button' className={styles.closeBtn} onClick={onClose}>
          <X className={styles.closeBtnIcon} />
        </button>

        <h2 className={styles.title}>{isLogin ? 'Увійти' : 'Реєстрація'}</h2>

        {isLogin ? (
          <LoginForm toggleModal={toggleModal} style={styles.autForm} />
        ) : (
          <RegisterForm toggleModal={toggleModal} style={styles.autForm} />
        )}

        {isLogin ? (
          <div className={styles.authText}>
            Немає акаунту?{' '}
            <button
              type='button'
              onClick={toggleAuth}
              className={styles.authTextBtn}
            >
              Зареєструватися
            </button>
          </div>
        ) : (
          <div className={styles.authText}>
            Вже є акаунт?{' '}
            <span
              type='button'
              onClick={toggleAuth}
              className={styles.authTextBtn}
            >
              Увійти
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
export default AuthModal;
