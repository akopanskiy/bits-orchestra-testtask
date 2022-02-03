import { useState } from 'react';
import { fetchAddBook } from '../../services/booksAPI';
import shortid from 'shortid';
import Modal from '../Modal';
import styles from './AddBook.module.css';

const AddBook = () => {
  const [author, setAuthor] = useState('');
  const [name, setName] = useState('');
  const [genre, setGenre] = useState('');
  const [ISBN, setISBN] = useState(0);
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
    const book = {
      author,
      name,
      genre,
      ISBN,
    };
    fetchAddBook(book);
    alert('Книгу додано!')
    toggleModal();
    setAuthor('');
    setName('');
    setGenre('');
    setISBN('');
  };

  return (
    <>
      <div >
      <button type="button" onClick={toggleModal} className={styles.btnAddBook}>
       
        </button>
        </div>
      {showModal && (
        <Modal>
          <div className={styles.Modal_content}>
            <form onSubmit={handleSubmit} className={styles.transparent}>
              <div className={styles.formInner}>
                <h3>Додати книгу</h3>
                <label htmlFor={authorId}>Author</label>
                <input
                  type="text"
                  name="author"
                  value={author}
                  required
                  onChange={handleChange}
                  id={authorId}
                  autoComplete="off"
                />

                <label htmlFor={nameId}>Name</label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  required
                  onChange={handleChange}
                  id={nameId}
                  autoComplete="off"
                />

                <label htmlFor={genreId}>Genre</label>

                <input
                  type="text"
                  name="genre"
                  value={genre}
                  required
                  onChange={handleChange}
                  id={genreId}
                  autoComplete="off"
                />

                <label htmlFor={isbnId}>ISBN</label>

                <input
                  type="number"
                  name="ISBN"
                  value={ISBN}
                  required
                  onChange={handleChange}
                  id={isbnId}
                  autoComplete="off"
                />

                <button type="submit" className={styles.btnAdd}>
                  Add book
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

export default AddBook;