import { useEffect, useState } from "react";

import { CARD_NAMES, CardName } from "@/constants/variables";

const useCardNameModal = (initialState = false) => {
  const [isShow, setShowStatus] = useState(initialState);
  const [cardNameList, setCardNameList] = useState<CardName[]>([]);
  const [selectedCardName, setSelectedCardName] = useState<CardName>({
    name: "",
    color: "#94DACD",
  });

  useEffect(() => {
    setCardNameList(CARD_NAMES);
  }, []);

  useEffect(() => {
    if (!selectedCardName) return;

    setSelectedCardName(CARD_NAMES[0]);
  }, [cardNameList]);

  const handleCardNameModalClose = () => {
    setShowStatus(false);
  };

  const handleCardNameModalOpen = () => {
    setShowStatus(true);
  };

  const handleCardNameSelect = (name: string, color: string) => {
    setSelectedCardName({ name, color });
    setShowStatus(false);
  };

  return {
    cardNameList,
    selectedCardName,
    isCardNameModalShow: isShow,
    onCardNameModalOpen: handleCardNameModalOpen,
    onCardNameModalClose: handleCardNameModalClose,
    onCardNameSelect: handleCardNameSelect,
  };
};

export default useCardNameModal;
