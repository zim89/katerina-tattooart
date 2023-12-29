const serializeUser = (user) => {
  if (user) {
    const { provider } = user.app_metadata;
    const { avatar_url, provider_id } = user.user_metadata;

    let avatar;
    provider === 'facebook'
      ? (avatar = `https://graph.facebook.com/v18.0/${provider_id}/picture?type=square`)
      : (avatar = avatar_url);

    return {
      id: user.id,
      email: user.email,
      provider,
      avatar_url: avatar,
      provider_id,
    };
  }
};

export default serializeUser;
