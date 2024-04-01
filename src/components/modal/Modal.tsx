import { useModal } from '@/hooks/useModal/useModal';
import { ModalPortal } from './ModalPortal';
import { LAYOUT } from '@/layout/global/layout.constant';

interface ModalContainerProps extends React.PropsWithChildren {
  isOpen?: boolean;
  closeModal?: () => void;
}

const ModalContainer = ({
  isOpen,
  closeModal,
  children,
}: ModalContainerProps) => {
  if (!isOpen) return null;

  return (
    <ModalPortal rootId={LAYOUT.ROOT_ID.MOBILE}>
      <div className='modal-dimmed' onClick={closeModal}>
        <div className='modal' onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
    </ModalPortal>
  );
};

export const Modal = Object.assign(ModalContainer, {
  use: useModal,
});
