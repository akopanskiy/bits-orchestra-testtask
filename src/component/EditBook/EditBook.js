import { useState } from 'react';
import { fetchUpdateBook } from '../../services/booksAPI';
import shortid from 'shortid';
import Modal from '../Modal';
import styles from './EditBook.module.css';

const EditBook = ({ book }) => {
  const [author, setAuthor] = useState(book.author);
  const [name, setName] = useState(book.name);
  const [genre, setGenre] = useState(book.genre);
  const [ISBN, setISBN] = useState(book.ISBN);
  const [showModal, setShowModal] = useState(false);

  const nameId = shortid.generate();
  const authorId = shortid.generate();
  const genreId = shortid.generate();
  const isbnId = shortid.generate();

  const toggleModal = () => {
    setShowModal(state => !state);
  };

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'author':
        setAuthor(value);
        break;
      case 'name':
        setName(value);
        break;
      case 'genre':
        setGenre(value);
        break;
      case 'ISBN':
        setISBN(value);
        break;
      default:
        return;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();

    fetchUpdateBook(book.id, { author, name, genre, ISBN });

    toggleModal();
    setAuthor(author);
    setName(name);
    setGenre(genre);
    setISBN(ISBN);
  };

  return (
    <>
      <button type="button" onClick={toggleModal} className={styles.editBtn}>
        <span className={styles.btnEditName}>Edit</span>
      </button>
      {showModal && (
        <Modal>
          <div className={styles.Modal_content}>
            <form onSubmit={handleSubmit} className={styles.transparent}>
              <div className={styles.formInner}>
                <h3>Знайшов помилку? Виправляй)</h3>
                <label htmlFor={authorId}>Author</label>
                <input
                  type="text"
                  name="author"
                  value={author}
                  placeholder={book.author}
                  onChange={handleChange}
                  id={authorId}
                  autoComplete="on"
                />

                <label htmlFor={nameId}>Name</label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  placeholder={book.name}
                  onChange={handleChange}
                  id={nameId}
                  autoComplete="on"
                />

                <label htmlFor={genreId}>Genre</label>

                <input
                  type="text"
                  name="genre"
                  value={genre}
                  placeholder={book.genre}
                  onChange={handleChange}
                  id={genreId}
                  autoComplete="on"
                />

                <label htmlFor={isbnId}>ISBN</label>

                <input
                  type="number"
                  name="ISBN"
                  value={ISBN}
                  placeholder={book.ISBN}
                  onChange={handleChange}
                  id={isbnId}
                  autoComplete="on"
                />

                <button type="submit" className={styles.btnAdd}>
                  Edit book
                </button>
                <button
                  type="button"
                  onClick={toggleModal}
                  className={styles.btnClose}
                ></button>
              </div>
            </form>
          </div>
        </Modal>
      )}
    </>
  );
};

export default EditBook;