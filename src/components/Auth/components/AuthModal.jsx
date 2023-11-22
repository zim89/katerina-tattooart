'use client';
import { useState } from 'react';

import Modal from '@/components/Modal/Modal';

import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

import 'react-toastify/dist/ReactToastify.min.css';

import styles from '../styles/AuthModal.module.css';

const AuthModal = ({ closeModal }) => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleAuth = () => {
    setIsLogin(!isLogin);
  };

  return (
    <Modal closeModal={closeModal}>
      <h2 className={styles.title}>{isLogin ? 'Увійти' : 'Реєстрація'}</h2>

      {isLogin ? (
        <LoginForm closeModal={closeModal} />
      ) : (
        <RegisterForm closeModal={closeModal} />
      )}

      {isLogin ? (
        <div className={styles.authText}>
          Немає акаунту?{' '}
          <button
            className={styles.authTextBtn}
            onClick={toggleAuth}
            type='button'
          >
            Зареєструватися
          </button>
        </div>
      ) : (
        <div className={styles.authText}>
          Вже є акаунт?{' '}
          <span
            className={styles.authTextBtn}
            onClick={toggleAuth}
            type='button'
          >
            Увійти
          </span>
        </div>
      )}
    </Modal>
  );
};
export default AuthModal;
