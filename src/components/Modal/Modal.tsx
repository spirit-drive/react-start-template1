import React, { FC } from 'react';
import './Modal.sass';
import cn from 'clsx';

interface ModalProps {
  visible: boolean;
  children?: string;
  title?: string;
}

export const Modal: FC<ModalProps> = ({ visible = false, children = '', title = '' }) => {
  return (
    <>
      {visible && (
        <div className={cn('modal')}>
          <article className={cn('modal-container')}>
            <header>
              <span className={cn('close')}>&times;</span>
              <h1>{title}</h1>
            </header>
            <section className={cn('modal-content')}>{children}</section>
          </article>
        </div>
      )}
    </>
  );
};
