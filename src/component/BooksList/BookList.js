import DeleteBook from "../DeleteBook";
import EditBook from "../EditBook";
import { fetchBookById } from "../../services/booksAPI";
import { useState, useEffect } from "react";

import styles from './BooksList.module.css';

const BookList = ({id, deleteBook }) => {
  const [book, setBook] = useState([]);

  useEffect(() => {
        fetchBookById(id).then(res => setBook(res.data))
    }, [id])
  return (
    <>
      
      <tr key={book.id}>
        <td>{book.author}</td>
        <td>{book.name}</td>
        <td>{book.genre}</td>
        <td>{book.ISBN}</td>
        <td>
          <div className={styles.btnContainer}>
            <EditBook book={book} />
            <DeleteBook id={id} deleteBook={deleteBook} />
          </div>
        </td>
      </tr>
      
    </>
  );
};
export default BookList;