import React, { FC, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Logo } from '../Logo/Logo';
import './Header.sass';
import cn from 'clsx';
import { ThemeSwitcher } from '../ThemeSwitcher/ThemeSwitcher';
import { AppContext, Context } from '../../App';
import { LocaleSwitcher } from '../LocaleSwitcher/LocaleSwitcher';

export const Header: FC = () => {
  const context: AppContext = useContext<AppContext>(Context);
  const theme = `header-${context?.theme ?? 'light'}`;
  const { t } = useTranslation();

  return (
    <div className={cn('header-container')}>
      <header className={cn('header', `${theme}`)}>
        <div className={cn('header-content')}>
          <nav className={cn('nav-panel')}>
            <div className={cn('logo-container')}>
              <Logo />
            </div>
            <ul className={cn('menu-items')}>
              <li>
                <div className={cn('menu-item')}>
                  <a href={'/'}>
                    <span>{t('header.menu.first')}</span>
                  </a>
                </div>
              </li>
              <li>
                <div className={cn('menu-item')}>
                  <a href={'/'}>
                    <span>{t('header.menu.second')}</span>
                  </a>
                </div>
              </li>
              <li>
                <div className={cn('menu-item')}>
                  <a href={'/'}>
                    <span>{t('header.menu.third')}</span>
                  </a>
                </div>
              </li>
            </ul>
            <div className={'switchers-container'}>
              <ul>
                <li>
                  <ThemeSwitcher />
                </li>
                <li>
                  <LocaleSwitcher />
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};
