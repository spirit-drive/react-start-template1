import React, { FC, useContext } from 'react';
import cn from 'clsx';
import { AppContext, Context } from '../../App';

export const LocaleSwitcher: FC = () => {
  const context: AppContext = useContext<AppContext>(Context);

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    context.localeSetter(e.target.value);
  };

  return (
    <select onChange={onChange}>
      <option value={'en'}>EN</option>
      <option value={'ru'}>RU</option>
    </select>
  );
};
