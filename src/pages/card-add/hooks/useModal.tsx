import { ReactNode, useCallback } from "react";
import { useModalContext } from "../providers";

export default function useModal(modal: (closeModal: () => void) => ReactNode) {
  const { setModal } = useModalContext();

  const closeModal = useCallback(() => {
    setModal(null);
  }, [setModal]);

  const showModal = useCallback(() => {
    setModal(modal(closeModal));
  }, [closeModal, modal, setModal]);

  return {
    showModal,
    closeModal,
  };
}
