import { ReactNode, useCallback } from "react";
import { useModalContext } from "../providers";

export default function useModal(modal: () => ReactNode) {
  const { openModal, closeModal } = useModalContext();

  const showModal = useCallback(
    (props: { onOpen?: () => void; onClose?: () => void } = {}) => {
      openModal(modal(), props);
    },
    [modal, openModal]
  );

  return {
    showModal,
    closeModal,
  };
}
