import React, { FC, useEffect, useState } from 'react';
import './Modal.sass';
import cn from 'clsx';

interface ModalProps {
  visible: boolean;
  children?: string;
  title?: string;
}

export const Modal: FC<ModalProps> = ({ visible = false, children = '', title = '' }) => {
  const [show, setShow] = useState<boolean>(visible);

  useEffect((): void => {
    setShow(visible);
  }, [visible]);

  return (
    <>
      {show && (
        <div className={cn('modal')}>
          <article className={cn('modal-container')}>
            <header>
              <span className={cn('close')} onClick={() => setShow(false)}>
                &times;
              </span>
              <h1>{title}</h1>
            </header>
            <section className={cn('modal-content')}>{children}</section>
          </article>
        </div>
      )}
    </>
  );
};
