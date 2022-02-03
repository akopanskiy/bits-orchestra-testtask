import axios from 'axios';

axios.defaults.baseURL = 'https://server-books-bistorchestratask.herokuapp.com';

export const fetchAllBooks = () => {
  return axios.get(`/books`);
};

export const fetchAddBook = book => {
  return axios.post(`/books`, book);
};

export const fetchDeleteBook = id => {
  return axios.delete(`/books/${id}`);
};

export const fetchUpdateBook = (id, book) => {
  return axios.put(`/books/${id}`, book);
};

export const fetchBookById = id => {
  return axios.get(`/books/${id}`);
};