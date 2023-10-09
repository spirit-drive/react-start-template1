import React, { FC } from 'react';
import './Logo.sass';
import cn from 'clsx';

export const Logo: FC = () => {
  return (
    <div className={cn('logo-content')}>
      <a href={'/'}>
        <div className={cn('logo')}>Logo</div>
      </a>
    </div>
  );
};
