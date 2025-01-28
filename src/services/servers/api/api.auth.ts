import axios from '@/services/utils/axios';
import { API } from '@/services/utils/constant';

export const login = (data: any) =>
  axios.post(API.login, data).then((res) => res?.data);

export const register = (data: any) =>
  axios.post(API.register, data).then((res) => res?.data);

export const verifyRegister = (data: any) =>
  axios.post(API.verifyRegister, data).then((res) => res?.data);

export const forgotPassword = (data: any) =>
  axios.post(API.forget, data).then((res) => res?.data);

export const forgotVerify = (data: any) =>
  axios.post(API.forgetVerify, data).then((res) => res?.data);

export const changePassword = (data: any) =>
  axios.post(API.changePassword, data).then((res) => res?.data);
