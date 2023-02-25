import { useState } from "react";

function useModalState() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bankId, setBankId] = useState("");

  const toggleModal = () => {
    setIsModalOpen((isOpen) => !isOpen);
  };

  return { toggleModal, isModalOpen, bankId, setBankId };
}

export default useModalState;
