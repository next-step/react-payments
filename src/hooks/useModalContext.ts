import { useContext } from "react";
import { ModalContext } from "./../components/ModalProvider";
function useModalContext() {
  const modalContext = useContext(ModalContext);

  if (!modalContext) {
    alert("modal context 누락");
    throw Error("modal context 필수값 누락");
  }

  const { isOpen, setIsOpen } = modalContext;

  return { isOpen, setIsOpen };
}

export default useModalContext;
