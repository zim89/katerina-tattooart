import { createClient } from '@/utils/supabase/client';

const supabase = createClient();

const getUser = async () => {
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  return { user, error };
};
const getUserFromSession = async () => {
  const {
    data: { session },
    error,
  } = await supabase.auth.getSession();

  if (error) {
    console.log(error.message);
  }

  return session?.user;
};

const login = async (formData) => {
  const {
    data: { user },
    error,
  } = await supabase.auth.signInWithPassword(formData);

  if (error) {
    console.log(error.message);
  }
  return { user, error };
};

const loginWithProvider = async (provider) => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider,
  });

  if (error) {
    console.log(error.message);
  }

  return { data, error };
};

const register = async ({ email, password }) => {
  const {
    data: { user },
    error,
  } = await supabase.auth.signUp({
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

  return { user, error };
};

const logout = async () => {
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.log(error.message);
  }

  return { error };
};

const authAPI = {
  getUser,
  getUserFromSession,
  register,
  login,
  loginWithProvider,
  logout,
};

export default authAPI;
