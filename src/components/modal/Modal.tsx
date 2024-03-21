import { useModal } from '@/hooks/useModal/useModal';
// import { ModalPortal } from './ModalPortal';
// 실제 모바일이 아니라 Portal을 우선 제거하였습니다.(CSS 깨짐)

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
    <div className='modal-dimmed' onClick={closeModal}>
      <div className='modal' onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export const Modal = Object.assign(ModalContainer, {
  use: useModal,
});
