import { useState } from 'react';
import Modal from '../Modal';
import styles from './DeleteBook.module.css';

const DeleteBook = ({ deleteBook, id }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    if (showModal) {
       alert("Правильне рішення!)")
    }
    setShowModal(state => !state);
  };

  return (
    <>
      <button type="button" onClick={toggleModal} className={styles.dltBtn}>
        Delete
      </button>
      {showModal && (
        <Modal>
          <div className={styles.Modal_content}>
            <h2 className={styles.modalDeleteHead}>
              Ви справді бажаєте видалити книгу?
            </h2>
            <button
              type="button"
              onClick={() => deleteBook(id)}
              className={styles.btnDeleteYes}
            >
              Yes
            </button>
            <button
              type="button"
              onClick={toggleModal}
              className={styles.btnDeleteNo}
            >
              No
            </button>
          </div>
        </Modal>
      )}
    </>
  );
};

export default DeleteBook;