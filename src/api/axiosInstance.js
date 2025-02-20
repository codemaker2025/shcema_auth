import axios from "axios";
import authStorage from "../utils/tokenService.js";

const axiosInstance = axios.create({
  baseURL: "https://core-skill-test.webc.in/employee-portal",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const authState = authStorage.getAuthState();
    console.log(authState,"token");
    
    if (authState.token) {
      config.headers.Authorization = `Bearer ${authState.token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
