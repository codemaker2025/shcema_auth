const TOKEN_KEY = "auth-token";

const authStorage = {
  saveAuthState: (authData) => {
    localStorage.setItem(TOKEN_KEY, JSON.stringify(authData));
  },

  getAuthState: () => {
    const data = localStorage.getItem(TOKEN_KEY);
    return data ? JSON.parse(data) : { isAuthenticated: false, user: null, token: null };
  },

  clearAuthState: () => {
    localStorage.removeItem(TOKEN_KEY);
  },
};

export default authStorage;
