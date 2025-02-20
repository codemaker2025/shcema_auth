const authStorage = {
  getAuthState: () => {
    const storedData = localStorage.getItem("token");

    if (storedData) {
      const parsedData = JSON.parse(storedData);
      return { isAuthenticated: true, ...parsedData };
    }

    return { isAuthenticated: false, user: null, token: null };
  },

  setAuthState: (authState) => {
    if (authState.isAuthenticated) {
      localStorage.setItem("token", JSON.stringify(authState));
    } else {
      authStorage.clearAuthState();
    }
  },

  clearAuthState: () => {
    localStorage.removeItem("token");
  },
};

export default authStorage