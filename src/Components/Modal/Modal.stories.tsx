import React, { useRef, useState } from 'react';
import Modal from './Modal';

export default { title: 'Components/Modal' };

export const TestModal = () => {
  const modalRef = useRef(null);
  const [isOpenModal, setOpenModal] = useState<boolean>(false);

  const openModal = () => {
    setOpenModal(true);
  };

  const onModalClose = () => {
    setOpenModal(false);
  };

  return (
    <div
      className="modal-parent"
      style={{
        display: 'flex',
        position: 'absolute',
        width: '375px',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      ref={modalRef}
    >
      <button onClick={openModal}>openModal</button>
      <Modal
        isOpen={isOpenModal}
        onClose={onModalClose}
        containerRef={modalRef}
      >
        <button onClick={onModalClose}>Close Modal</button>
      </Modal>
    </div>
  );
};
