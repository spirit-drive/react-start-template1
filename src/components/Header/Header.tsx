import React, { FC } from 'react';
import { Logo } from '../Logo/Logo';
import './Header.sass';
import cn from 'clsx';

export const Header: FC = () => {
  return (
    <header className={cn('header')}>
      <div className={cn('header-container')}>
        <div className={cn('header-content')}>
          <nav className={cn('nav-panel')}>
            <div className={cn('logo-container')}>
              <Logo />
            </div>
            <ul className={cn('menu-items')}>
              <li>
                <div className={cn('menu-item')}>
                  <a href={'/'}>
                    <span>menu item 1</span>
                  </a>
                </div>
              </li>
              <li>
                <div className={cn('menu-item')}>
                  <a href={'/'}>
                    <span>menu item 2</span>
                  </a>
                </div>
              </li>
              <li>
                <div className={cn('menu-item')}>
                  <a href={'/'}>
                    <span>menu item 3</span>
                  </a>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
