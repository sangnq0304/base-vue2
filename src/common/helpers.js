const TOKEN_KEY = 'access_token';
const REFRESH_TOKEN_KEY = 'refresh_token';

const TokenService = {
  getToken() {
    return localStorage.getItem(TOKEN_KEY);
  },

  setToken(token) {
    localStorage.setItem(TOKEN_KEY, token || '');
  },

  removeToken() {
    localStorage.removeItem(TOKEN_KEY);
  },

  getReFreshToken() {
    return localStorage.getItem(REFRESH_TOKEN_KEY);
  },

  setReFreshToken(refreshToken) {
    localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken || '');
  },

  removeRefreshToken() {
    localStorage.removeItem(REFRESH_TOKEN_KEY);
  },
};

export default TokenService;
