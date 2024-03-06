import { cloneElement, useState } from "react";

const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const open = () => {
    setIsModalOpen(true);
  };

  const close = () => {
    setIsModalOpen(false);
  };

  const Modal = ({ children }) => {
    return isModalOpen && cloneElement(children, { close });
  };

  return { Modal, modal: { open, close } };
};

export default useModal;
