import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import serializeUser from '../utils/serializeUser';

const supabase = createClientComponentClient();

const getFromSession = async () => {
  const {
    data: { session },
    error,
  } = await supabase.auth.getSession();

  if (error) {
    console.log(error.message);
  }

  return serializeUser(session?.user);
};

const login = async (data) => {
  const { user, error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    console.log(error.message);
  }

  return { user, error };
};

const register = async ({ email, password }) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        username: email.split('@')[0],
      },
      emailRedirectTo: `${location.origin}/auth/callback`,
    },
  });

  if (error) {
    console.log(error.message);
  }
  return { data, error };
};

const logout = async () => {
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.log(error.message);
  }

  return { error };
};

const userAPI = { getFromSession, login, register, logout };

export default userAPI;
