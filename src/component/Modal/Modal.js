import React, { Component } from 'react';
import { createPortal } from 'react-dom';

import styles from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  render() {
    return createPortal(
      <div className={styles.Modal_backdrop}>
        {this.props.children}
      </div>,
      modalRoot,
    );
  }
}