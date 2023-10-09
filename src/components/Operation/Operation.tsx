import React, { FC } from 'react';
import cn from 'clsx';
import './Operation.sass';

type OperationPros = {
  name: string;
  category: string;
  sum: number;
  date: Date;
  desc: string;
};

export const Operation: FC<OperationPros> = ({ name, category, sum = 0, date, desc }) => {
  const dateFormatted = `
    ${date.getDate()} ${date.toLocaleString('default', { month: 'long' })} ${date.getFullYear()}, 
    ${date.getHours()}:${String(date.getMinutes()).padStart(2, '0')}
    `;

  return (
    <article className={cn('operation-container')}>
      <header>
        <p className={cn('operation-date')}>{dateFormatted}</p>
      </header>
      <div className={cn('operation-content')}>
        <p className={cn('operation-name')}>{name}</p>
        <div className={cn('operation-category')}>
          <span>{category}</span>
        </div>
        <div className={cn('operation-sum')}>
          <p>{sum} €</p>
        </div>
        <div className={cn('operation-description')}>
          <span>{desc}</span>
        </div>
      </div>
    </article>
  );
};
