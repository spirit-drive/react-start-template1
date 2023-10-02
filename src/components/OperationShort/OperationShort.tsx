import React, { FC } from 'react';
import styles from './short.module.css';

interface OperationShortProps {
  name: string;
  category: string;
  sum: number;
  desc: string;
}

export const OperationShort: FC<OperationShortProps> = ({ name, category, sum = 0, desc }) => {
  return (
    <article className={styles.container}>
      <header>
        <h3 className={styles.title}>{name}</h3>
        <span>{category}</span>
      </header>
      <div>
        <p>
          <strong>{sum} €</strong>
        </p>
        <p className={styles.description}>{desc}</p>
      </div>
    </article>
  );
};
