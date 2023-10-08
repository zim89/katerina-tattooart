import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
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
      <Avatar />
    </div>
  );
};

export default UserMenu;
