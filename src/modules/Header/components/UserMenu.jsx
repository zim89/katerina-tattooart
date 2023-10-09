import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { LogOut } from 'lucide-react';
import Avatar from './Avatar';

export const dynamic = 'force-dynamic';

const UserMenu = async () => {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className='hidden md:flex md:items-center md:gap-2 xl:gap-10'>
      <a className='nav-link xl:text-lg/5.1 xl:text-primary' href='#'>
        UA
      </a>
      {!user ? (
        <Avatar />
      ) : (
        <form
          action='/auth/logout'
          method='post'
          className='flex items-center justify-center'
        >
          <button className='transition-colors duration-200 hover:text-red-400'>
            <LogOut strokeWidth={1.5} className='h-5 w-5 xl:h-8 xl:w-8' />
          </button>
        </form>
      )}
    </div>
  );
};

export default UserMenu;
