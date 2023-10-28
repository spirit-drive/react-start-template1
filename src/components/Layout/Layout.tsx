import React, { FC, useContext } from 'react';
import { Header } from '../Header/Header';
import './Layout.sass';
import cn from 'clsx';
import { AppContext, Context } from '../../App';
import { useTranslation } from 'react-i18next';

export const Layout: FC = () => {
  const context: AppContext = useContext<AppContext>(Context);
  const theme = `layout-${context?.theme ?? 'light'}`;
  const { t } = useTranslation();

  return (
    <div className={cn('layout-container')}>
      <div className={cn('layout', `${theme}`)}>
        <Header />
        <div className={cn('layout-content')}>
          <p>{t('content')}</p>
        </div>
      </div>
    </div>
  );
};
