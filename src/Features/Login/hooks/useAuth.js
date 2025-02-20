import { useRecoilState } from "recoil";
import { authState } from "../Recoil/atoms/authState";
import axiosInstance from "../../../api/axiosInstance";
import authStorage from "../../../utils/tokenService";
export default function useAuth() {
    const [auth, setAuth] = useRecoilState(authState);
  
    async function handleLogin(username, password) {
      try {
        const response = await axiosInstance.post("/api/v1/auth/login", {
            username:"Albin.s@webandcrafts.in",
            password:"Albin@123",
        });
  
        const authData = {
          isAuthenticated: true,
          user: response.data.data.email,
          token: response.data.data.token,
        };
  
        setAuth(authData);
      } catch (error) {
        console.error("Login Failed:", error);
      }
    }
  
    function handleLogout() {
      authStorage.clearAuthState();
      setAuth({ isAuthenticated: false, user: null, token: null });
    }
  
    return { auth, handleLogin, handleLogout };
  }