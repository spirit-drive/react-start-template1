import React, { FC } from 'react';
import './OperationShort.sass';
import cn from 'clsx';

interface OperationShortProps {
  name: string;
  category: string;
  sum: number;
  desc: string;
}

export const OperationShort: FC<OperationShortProps> = ({ name, category, sum = 0, desc }) => {
  return (
    <article className={cn('operation-short-container')}>
      <div className={cn('operation-short-panel')}>
        <div className={cn('operation-short-description')}>
          <span>{desc}</span>
        </div>
        <div className={cn('operation-short-sum')}>
          <span>{sum}</span>
        </div>
      </div>
      <div className={cn('operation-short-panel')}>
        <div className={cn('operation-short-name')}>
          <div>{name}</div>
        </div>
        <div className={cn('operation-short-category')}>
          <span>
            <a href={'#'}>{category}</a>
          </span>
        </div>
      </div>
    </article>
  );
};
