import { ReactNode, useCallback } from "react";
import { useModalContext } from "../providers";

export default function useModal(modal: (closeModal: () => void) => ReactNode) {
  const { openModal, closeModal } = useModalContext();

  const showModal = useCallback(() => {
    openModal(modal(closeModal));
  }, [closeModal, modal, openModal]);

  return {
    showModal,
    closeModal,
  };
}
