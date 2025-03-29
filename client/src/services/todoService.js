import axios from "axios";

const API_URL = "http://localhost:3000";

export const todoService = {
  getAllTodos() {
    return axios.get(`${API_URL}/allTodos`);
  },
  addTodo(description) {
    return axios.post(`${API_URL}/addTodo`, { description });
  },
  checkTodo(todoId, completed) {
    return axios.post(`${API_URL}/checkTodo/${todoId}`, { completed });
  },
};
