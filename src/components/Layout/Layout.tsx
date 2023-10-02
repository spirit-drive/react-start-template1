import React, { FC } from 'react';
import { Header } from '../Header/Header';
import styles from './layout.module.css';

export const Layout: FC = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <div>
        <p>Some Content</p>
      </div>
    </div>
  );
};
