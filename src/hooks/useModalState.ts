import { useState } from "react";

function useModalState() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cardId, setCardId] = useState("");

  const toggleModal = () => {
    setIsModalOpen((isOpen) => !isOpen);
  };

  return { toggleModal, isModalOpen, cardId, setCardId };
}

export default useModalState;
