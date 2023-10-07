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
    <ul className='hidden md:flex md:items-center md:gap-2 xl:gap-10'>
      <li>
        <a className='nav-link' href='#'>
          UA
        </a>
      </li>
      <li>
        <Avatar />
      </li>
    </ul>
  );
};

export default UserMenu;
