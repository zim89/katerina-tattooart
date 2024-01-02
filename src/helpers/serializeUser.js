const serializeUser = (user) => {
  if (user) {
    const { provider } = user.app_metadata;
    const { avatar_url, provider_id } = user.user_metadata;

    return {
      id: user.id,
      email: user.email,
      provider,
      avatar_url,
      provider_id,
    };
  }
};

export default serializeUser;
