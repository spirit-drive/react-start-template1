import React, { FC, useContext } from 'react';
import cn from 'clsx';
import './ThemeSwitcher.sass';
import { AppContext, Context } from '../../App';
import { useTranslation } from 'react-i18next';

export const ThemeSwitcher: FC = () => {
  const context: AppContext = useContext<AppContext>(Context);
  const { t } = useTranslation();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    !e.target.checked ? context.themeSetter('light') : context.themeSetter('dark');
  };

  return (
    <div className={cn('theme-switcher')}>
      <label className={cn('switch')}>
        <input type={'checkbox'} onChange={onChange} />
        <span className={cn('slider', 'round')}></span>
      </label>
      <span className={cn('theme-switcher-text')}>{t('header.switchers.theme')}</span>
    </div>
  );
};
