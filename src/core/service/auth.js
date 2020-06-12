import fetchAPI from './fetchAPI';

export default {
  login: async (username, password) => {
    const url = process.env.config.auth;
    const authData = {
      grant_type: 'password',
      username: username,
      password: password,
      client_id: process.env.config.CLIENT_ID,
      client_secret: process.env.config.CLIENT_SECRET
    };
    const { data } = await fetchAPI.post(url, authData);
    document.cookie = `access_token=${data.access_token};max-age=${data.expires_in}`;
    fetchAPI.defaults.headers.common.Authorization = `Bearer ${data.access_token}`;
    return data.access_token;
  }
};
