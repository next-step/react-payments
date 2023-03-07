import type { PropsWithChildren } from 'react';
import CardCompanySelectModal from './CardCompanySelectModal';

interface ModalProps {
  onClose(): void;
  modalType: string | null;
}

const modalMap: Record<string, () => JSX.Element> = {
  cardCompanySelectModal: CardCompanySelectModal,
};

function ModalBody({ children }: PropsWithChildren) {
  return <div className="bg-black w-96 min-w-[384px] h-[700px] relative backdrop-brightness-110">{children}</div>;
}

function Modal({ onClose, modalType }: PropsWithChildren<ModalProps>) {
  const ModalContent = modalMap['cardCompanySelectModal'] ?? null;

  return (
    <div
      onClick={onClose}
      className="fixed w-screen h-screen -top-1 left-0 right-0 flex flex-col justify-center items-center opacity-50"
    >
      <ModalBody>
        <ModalContent />
      </ModalBody>
    </div>
  );
}

export default Modal;
