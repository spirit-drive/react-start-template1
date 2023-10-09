import React, { FC } from 'react';
import { Header } from '../Header/Header';
import './Layout.sass';
import cn from 'clsx';

export const Layout: FC = () => {
  return (
    <div className={cn('layout')}>
      <Header />
      <div className={cn('layout-content')}>
        <p>Some Content</p>
      </div>
    </div>
  );
};
