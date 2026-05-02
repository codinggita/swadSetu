import axios from 'axios';
import store from '../store';
import { logout } from '../store/slices/authSlice';

const API_URL = import.meta.env.VITE_API_URL || '';

const api = axios.create({
  baseURL: `${API_URL}/api`,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export { API_URL };

// Request Interceptor: Attach token to every request
api.interceptors.request.use(
  (config) => {
    const state = store.getState();
    const token = state.auth.userInfo?.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor: Handle global errors (like 401 Unauthorized)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const originalRequest = config => config; // placeholder for retry logic
    
    if (error.response?.status === 401) {
      // Clear auth state and redirect if unauthorized
      store.dispatch(logout());
      if (window.location.pathname !== '/login') {
        window.location.href = '/login';
      }
    }
    
    // Add custom error message handling
    const message = error.response?.data?.message || error.message || 'An unexpected error occurred';
    error.customMessage = message;
    
    return Promise.reject(error);
  }
);

export default api;
