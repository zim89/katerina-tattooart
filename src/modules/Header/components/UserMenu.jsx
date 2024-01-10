'use client';
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { toast } from 'react-toastify';
import Avatar from '@/modules/Header/components/Avatar';
import { useUserContext } from '@/context/userContext';
import authAPI from '@/utils/supabase/api/authApi';
import Image from 'next/image';
import { clsx } from 'clsx';

const UserMenu = () => {
  const { currentUser, logOut } = useUserContext();
  const isGoogle = currentUser?.provider === 'google';

  const onLogout = async () => {
    const { error } = await authAPI.logout();

    if (error) {
      toast.error('Виникла помилка. Спробуйте пізніше!');
      return;
    }

    logOut();
    toast.success('Ви успішно вийшли!');
  };

  return (
    <>
      {!currentUser ? (
        <Avatar />
      ) : (
        <Menu as='div' className='relative'>
          <Menu.Button
            className={clsx(
              'relative flex h-[22px] w-[22px] items-center justify-center overflow-hidden rounded-full border pt-[1px] text-sm font-medium xl:h-11 xl:w-11 xl:text-[28px]',
              isGoogle ? 'border-secondary' : 'border-primary'
            )}
          >
            {isGoogle ? (
              <Image src={currentUser?.avatar_url} alt='User avatar' fill />
            ) : (
              currentUser?.email[0].toUpperCase()
            )}
          </Menu.Button>

          <Transition
            as={Fragment}
            enter='transition ease-out duration-100'
            enterFrom='transform opacity-0 scale-95'
            enterTo='transform opacity-100 scale-100'
            leave='transition ease-in duration-75'
            leaveFrom='transform opacity-100 scale-100'
            leaveTo='transform opacity-0 scale-95'
          >
            <Menu.Items className='absolute -bottom-12 right-0 flex justify-end xl:-bottom-15'>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className='group flex justify-end gap-[6px] align-text-bottom text-[14px] transition-colors hover:text-white xl:text-[18px]'
                    onClick={onLogout}
                  >
                    Вийти
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      className='h-5 w-5 fill-primary transition-all group-hover:fill-white xl:h-6 xl:w-6'
                    >
                      <path d='M15.5 17V18C15.5 20.29 14.29 21.5 12 21.5H6C3.71 21.5 2.5 20.29 2.5 18V6C2.5 3.71 3.71 2.5 6 2.5H12C14.29 2.5 15.5 3.71 15.5 6V7C15.5 7.276 15.276 7.5 15 7.5C14.724 7.5 14.5 7.276 14.5 7V6C14.5 4.271 13.729 3.5 12 3.5H6C4.271 3.5 3.5 4.271 3.5 6V18C3.5 19.729 4.271 20.5 6 20.5H12C13.729 20.5 14.5 19.729 14.5 18V17C14.5 16.724 14.724 16.5 15 16.5C15.276 16.5 15.5 16.724 15.5 17ZM21.461 12.191C21.512 12.069 21.512 11.931 21.461 11.809C21.436 11.747 21.399 11.692 21.353 11.646L18.353 8.646C18.158 8.451 17.841 8.451 17.646 8.646C17.451 8.841 17.451 9.158 17.646 9.353L19.792 11.499H8C7.724 11.499 7.5 11.723 7.5 11.999C7.5 12.275 7.724 12.499 8 12.499H19.793L17.647 14.645C17.452 14.84 17.452 15.157 17.647 15.352C17.745 15.45 17.873 15.498 18.001 15.498C18.129 15.498 18.257 15.449 18.355 15.352L21.355 12.352C21.399 12.308 21.436 12.252 21.461 12.191Z' />
                    </svg>
                  </button>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      )}
    </>
  );
};

export default UserMenu;
