'use client';
import { useUserContext } from '@/context/userContext';
import { LogOut } from 'lucide-react';
import Avatar from '@/modules/Header/components/Avatar';
import userAPI from '@/supabase/api/user';
import { toast } from 'react-toastify';

const UserMenu = () => {
  const { currentUser, logOut } = useUserContext();

  const onLogout = async () => {
    const { error } = await userAPI.logout();

    if (error) {
      toast.error('Виникла помилка. Спробуйте пізніше!');
      return;
    }

    logOut();
    toast.success('Ви успішно вийшли!');
  };

  return (
    <div className='hidden md:flex md:items-center md:gap-2 xl:gap-10'>
      <span className='nav-link cursor-pointer xl:text-lg/5.1 xl:text-primary'>
        UA
      </span>

      {currentUser && (
        <button
          className='transition-colors duration-200 hover:text-red-400'
          onClick={onLogout}
        >
          <LogOut strokeWidth={1.5} className='h-5 w-5 xl:h-8 xl:w-8' />
        </button>
      )}

      {!currentUser && <Avatar />}
    </div>
  );
};

export default UserMenu;
