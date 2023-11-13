'use client';
import Modal from '@/components/Modal/Modal';
import { useState } from 'react';
import 'react-toastify/dist/ReactToastify.min.css';
import styles from '../styles/AuthModal.module.css';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

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
    </Modal>
  );
};
export default AuthModal;
