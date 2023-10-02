import React, { FC } from 'react';
import styles from './modal.module.css';

interface ModalProps {
  visible: boolean;
  children?: string;
  title?: string;
}

export const Modal: FC<ModalProps> = ({ visible = false, children = '', title = '' }) => {
  return (
    <>
      {visible && (
        <div className={styles.modal}>
          <article className={styles.container}>
            <header className={styles.header}>
              <span className={styles.close}>&times;</span>
              <h1>{title}</h1>
            </header>
            <section className={styles.content}>{children}</section>
          </article>
        </div>
      )}
    </>
  );
};
