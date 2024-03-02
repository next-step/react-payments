import { cloneElement, useState } from "react";

const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const Modal = ({ children }) => {
    return isModalOpen && cloneElement(children, { toggleModal });
  };

  return { Modal, toggleModal };
};

export default useModal;
