const serializeUser = (user) => {
  if (user) {
    return {
      id: user.id,
      email: user.email,
      ...user.user_metadata,
    };
  }
};

export default serializeUser;
