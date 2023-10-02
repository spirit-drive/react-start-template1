import React, { FC } from 'react';
import styles from './operation.module.css';

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
    ${date.getHours()}:${date.getMinutes()}
    `;

  return (
    <article className={styles.container}>
      <header>
        <span>{dateFormatted}</span>
      </header>
      <div className={styles.content}>
        <p className={styles.operation}>
          {name} <br /> <span>{category}</span>
        </p>
        <p className={styles.sum}>{sum} €</p>
        <p className={styles.desc}>{desc}</p>
      </div>
    </article>
  );
};
