import axios from './apiAuth.config';

export const getAllTodo = async () => {
  return await axios.get(`/v1/todo?userId=43`);
};

export const createTodo = async (data) => {
    return await axios.post(`/v1/todo?userId=43`,data);
  };

  export const deleteTodo = async (id) => {
    return await axios.delete(`/v1/todo?userId=43`,id);
  };