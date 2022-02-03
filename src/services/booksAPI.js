import axios from 'axios';

const URL = 'http://localhost:3000/';

export const fetchAllBooks = () => {
  return axios.get(`${URL}books`);
};

export const fetchAddBook = book => {
  return axios.post(`${URL}books`, book);
};

export const fetchDeleteBook = id => {
  return axios.delete(`${URL}books/${id}`);
};

export const fetchUpdateBook = (id, book) => {
  return axios.put(`${URL}books/${id}`, book);
};

export const fetchBookById = id => {
  return axios.get(`${URL}books/${id}`);
};