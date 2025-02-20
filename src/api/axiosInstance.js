import axios from "axios";
import authStorage from "../utils/tokenService";

const axiosInstance = axios.create({
  baseURL: "https://core-skill-test.webc.in/employee-portal",
});

// Function to retrieve token with retries
const getTokenWithRetry = (retries = 3, delay = 500) => {
  return new Promise((resolve, reject) => {
    const attempt = (remainingAttempts) => {
      const persistedState = authStorage.getAuthState();

      if (persistedState.isAuthenticated && persistedState.token) {
        return resolve(persistedState.token);
      }

      if (remainingAttempts > 0) {
        setTimeout(() => attempt(remainingAttempts - 1), delay);
      } else {
        reject(new Error("Token retrieval failed after multiple attempts"));
      }
    };

    attempt(retries);
  });
};

// Interceptor to add Authorization header
axiosInstance.interceptors.request.use(
  async (config) => {
    try {
      const token = await getTokenWithRetry();
      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }
    } catch (error) {
      console.error("Error retrieving token:", error);
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
