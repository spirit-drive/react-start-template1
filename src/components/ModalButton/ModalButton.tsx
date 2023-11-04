import React, { FC, useState } from 'react';
import { Modal } from '../Modal/Modal';
import cn from 'clsx';
import './ModalButton.sass';

export const ModalButton: FC = () => {
  const [modalContent, setModalContent] = useState<string>('modal content');
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <>
      <div className={cn('modal-text')}>
        <input
          placeholder={'text for modal content here'}
          type={'text'}
          value={modalContent}
          onChange={(e) => setModalContent(e.target.value)}
        />
      </div>
      <div className={cn('modal-button-container')}>
        <button className={cn('modal-button')} onClick={() => setShowModal(true)}>
          Show Modal
        </button>
      </div>
      <Modal visible={showModal} title={'Test'}>
        {modalContent}
      </Modal>
    </>
  );
};
