import { useState, useEffect } from 'react';
import { fetchAllBooks, fetchDeleteBook } from '../../services/booksAPI';
import BooksList from '../BooksList';
import styles from './Books.module.css';

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchAllBooks().then(res => setBooks(res.data));
  }, []);

  const deleteBook = id => {
    fetchDeleteBook(id).then(() => {
      setBooks(prevBooks => prevBooks.filter(book => book.id !== id));
    }).then(alert('Книгу видалено!'));
  };

  return (
    <>
      <table>
        <caption>Best books</caption>
        <thead>
          <tr>
            <th>Автор</th>
            <th>Назва книги</th>
            <th>Жанр</th>
            <th>ISBN</th>
            <th>Instruments</th>
          </tr>
        </thead>
        <tbody>
          {books.map(book => (
            <BooksList key={book.id} deleteBook={deleteBook} id={book.id} />
          ))}
        </tbody>
      </table>
    </>
  );
};
export default Books;