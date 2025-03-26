import Axios from 'axios';
// import { API } from './constants';
// import { store } from '@/redux/store';
// import {
//   closeGetUser,
//   logOut,
//   setIsSession,
// } from '@/redux/slices/prescription';
import toast from 'react-hot-toast';
import { API } from './constant';

// function logOutOnTokenExpired() {
//   localStorage.removeItem('token');
//   store.dispatch(logOut());
//   window.location.href = '/auth/login';
// }

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
    // Laravel user custom error
    if (response?.data?.status == false) {
      if (typeof response?.data?.message == 'string') {
        toast.error(response?.data?.message);
      }
    }
    if (response?.data?.status == true) {
      toast.success(response?.data?.message);
    }
    return response;
  },
  async (error) => {
    if (error?.response?.status == 422 || error?.response?.status == 403) {
      toast.error(error?.response?.data?.message);
    }
    if (error?.response?.status === 401) {
      // logOutOnTokenExpired();
      return Promise.reject(error);
    }

    return error;
  },
);
export function getToken() {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('token');
  }
  return null;
}
// export async function getUser() {
//   if (typeof window !== 'undefined') {
//     return localStorage.getItem('user');
//   }
//   return null;
// }
export default axios;
