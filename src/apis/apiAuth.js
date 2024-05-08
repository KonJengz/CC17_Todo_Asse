import axios from './apiAuth.config';

export const createUser = async (data) => {
  return await axios.post(`/auth/register/`, data);
};

export const userLogin = async (data) => {
    return await axios.post(`/auth/login/`, data);
  };