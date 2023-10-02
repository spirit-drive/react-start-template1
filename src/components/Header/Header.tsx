import React, { FC } from 'react';
import { Logo } from '../Logo/Logo';
import styles from './header.module.css';

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Logo />
    </header>
  );
};
