import Axios from 'axios';
import toast from 'react-hot-toast';
import Cookies from 'js-cookie';
import { API } from './constant';

export const axios = Axios.create({
  baseURL: API.baseUrl,
});
if (typeof window !== 'undefined') {
  axios.interceptors.request.use(
    async (config) => {
      const token = getToken();
      config.headers.Authorization = `Bearer ${token}`;
      if (token) config.headers.Authorization = `Bearer ${token}`;
      return config;
    },
    (error) => Promise.reject(error),
  );
}
axios.interceptors.response.use(
  (response) => {
    if (response?.data?.status == false) {
      if (typeof response?.data?.message == 'string') {
        toast.error(response?.data?.message);
      }
    }
    // if (response?.data?.status == true) {
    //   toast.success(response?.data?.message);
    // }
    return response;
  },
  async (error) => {
    if (error?.response?.status == 422 || error?.response?.status == 403) {
      toast.error(error?.response?.data?.message);
    }
    if (error?.response?.status === 401) {
      return Promise.reject(error);
    }

    return error;
  },
);

export function getToken() {
  if (typeof window !== 'undefined') {
    // Attempt to get token from cookies first (set on login).
    const tokenFromCookie = Cookies.get('token');
    if (tokenFromCookie) return tokenFromCookie;
  }
  return null;
}

export default axios;
