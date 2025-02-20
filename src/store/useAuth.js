import { create } from "zustand";
import authStorage from "../../../utils/tokenService.jsx";
import axiosInstance from "../api/axiosInstance.js";

const useAuthStore = create((set) => ({
  auth: authStorage.getAuthState(), 

  login: async (username, password) => {
    try {
      const response = await axiosInstance.post("/api/v1/auth/login", {
        username: "Albin.s@webandcrafts.in",
        password: "Albin@123",
      });

      console.log(response, "login");

      const authData = {
        isAuthenticated: true,
        user: response.data.data.email,
        token: response.data.data.token,
      };

      authStorage.saveAuthState(authData);

      set((state) => ({ auth: { ...state.auth, ...authData } }));
    } catch (error) {
      console.error("Login Failed:", error);
    }
  },

  logout: async () => {
    try {
      const res = await axiosInstance.post("/api/v1/settings/logout");
      console.log(res, "logout");

      authStorage.clearAuthState();

      // ✅ Reset `auth` inside Zustand
      set({ auth: { isAuthenticated: false, user: null, token: null } });
    } catch (error) {
      console.error(error);
    }
  },
}));

export default useAuthStore;
