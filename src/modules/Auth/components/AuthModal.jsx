'use client';
import { useState } from 'react';

import Modal from '@/components/Modal';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import LoadingOverlay from '@/components/LoadingOverlay';
import authApi from '@/utils/supabase/api/authApi';

const AuthModal = ({ closeModal }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const toggleAuth = () => {
    setIsLogin(!isLogin);
  };

  const handleLoginWithGoogle = async () => {
    await authApi.loginWithGoogle();
  };

  return (
    <Modal closeModal={closeModal}>
      <div className='relative overflow-hidden rounded-xl border border-primary bg-dark-slate px-15 pb-7.5 pt-10 md:border-1.5 md:px-8 md:pb-10 md:pt-15 xl:px-10 xl:pt-20'>
        {isLoading && <LoadingOverlay />}
        <div className='grid grid-cols-1 gap-14 md:grid-cols-2 md:gap-8'>
          <div className='flex flex-col gap-6 md:order-last md:mr-auto'>
            <h2 className='text-center text-base md:text-2xl'>
              {isLogin ? 'Увійти за допомогою:' : 'Зареєструватись:'}
            </h2>
            {/*Auth providers*/}
            <div className='flex justify-center gap-6'>
              <button className='group' onClick={handleLoginWithGoogle}>
                <svg
                  viewBox='0 0 40 40'
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-10 w-10 fill-primary group-hover:fill-white'
                >
                  <path d='M19.9995 16.3635V24.109H30.7631C30.2905 26.5999 28.8721 28.7091 26.7449 30.1272L33.2358 35.1636C37.0176 31.6728 39.1994 26.5455 39.1994 20.4546C39.1994 19.0365 39.0722 17.6727 38.8357 16.3637L19.9995 16.3635Z' />
                  <path d='M8.79135 23.8066L7.32741 24.9273L2.14551 28.9636C5.43641 35.4908 12.1814 39.9999 19.9995 39.9999C25.3993 39.9999 29.9266 38.2181 33.2357 35.1636L26.7449 30.1272C24.963 31.3272 22.6903 32.0546 19.9995 32.0546C14.7995 32.0546 10.3815 28.5455 8.79953 23.8182L8.79135 23.8066Z' />
                  <path d='M2.1453 11.0364C0.781737 13.7272 0 16.7636 0 19.9999C0 23.2362 0.781737 26.2726 2.1453 28.9634C2.1453 28.9815 8.79996 23.7998 8.79996 23.7998C8.39996 22.5998 8.16353 21.3271 8.16353 19.9997C8.16353 18.6722 8.39996 17.3996 8.79996 16.1996L2.1453 11.0364Z' />
                  <path d='M19.9999 7.96363C22.9454 7.96363 25.5635 8.98179 27.6544 10.9454L33.3816 5.21825C29.9089 1.98194 25.4 0 19.9999 0C12.1818 0 5.43641 4.4909 2.14551 11.0364L8.79996 16.2C10.3817 11.4727 14.7999 7.96363 19.9999 7.96363Z' />
                </svg>
              </button>
              <button className='group'>
                <svg
                  viewBox='0 0 40 40'
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-10 w-10 fill-primary group-hover:fill-white'
                >
                  <path d='M40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 29.9824 7.31367 38.2566 16.875 39.757V25.7813H11.7969V20H16.875V15.5938C16.875 10.5813 19.8609 7.8125 24.4293 7.8125C26.6168 7.8125 28.9062 8.20312 28.9062 8.20312V13.125H26.3844C23.9 13.125 23.125 14.6668 23.125 16.25V20H28.6719L27.7852 25.7813H23.125V39.757C32.6863 38.2566 40 29.9824 40 20Z' />
                </svg>
              </button>
            </div>
          </div>

          {/*Auth forms*/}
          <div className=''>
            {isLogin ? (
              <LoginForm
                closeModal={closeModal}
                toggleAuth={toggleAuth}
                setIsLoading={setIsLoading}
              />
            ) : (
              <RegisterForm
                closeModal={closeModal}
                toggleAuth={toggleAuth}
                setIsLoading={setIsLoading}
              />
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
};
export default AuthModal;
