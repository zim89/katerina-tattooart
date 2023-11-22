// import supabase from '..';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

import serializeUser from '../utils/serializeUser';

const supabase = createClientComponentClient();

const getFromSession = async () => {
  const {
    data: { session },
    error,
  } = await supabase.auth.getSession();

  if (error) {
    console.log('Error in getFromSession: ', error);
    return;
  }

  return serializeUser(session?.user);
};

const userAPI = { getFromSession };

export default userAPI;
