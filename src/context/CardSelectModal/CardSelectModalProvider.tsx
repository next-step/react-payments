import { createContext, PropsWithChildren, useCallback, useMemo, useState } from 'react';

import { SelectedCard } from '@/types/card';

type InitValue = {
  isModalOpen: boolean;
  selectedCard: SelectedCard;
  카드사가선택된: boolean;
  handleClickOpenModal: () => void;
  handleClickCloseModal: () => void;
  handleClickCard: ({ name, color }: { name: string; color: string }) => void;
};

const initValue: InitValue = {
  isModalOpen: true,
  selectedCard: { name: '', color: '' },
  카드사가선택된: false,
  handleClickOpenModal: () => null,
  handleClickCloseModal: () => null,
  handleClickCard: () => null,
};

export const CardSelectModalContext = createContext<InitValue>(initValue);

export default function CardSelectModalProvider({ children }: PropsWithChildren) {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [selectedCard, setSelectedCard] = useState({
    name: '',
    color: '',
  });

  const 카드사가선택된 = selectedCard.name !== '';

  const handleClickOpenModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const handleClickCloseModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const handleClickCard = useCallback(({ name, color }: { name: string; color: string }) => {
    if (!name || !color) {
      return;
    }

    setSelectedCard({ name, color });
    setIsModalOpen(false);
  }, []);

  const contextValue = useMemo(
    () => ({ isModalOpen, selectedCard, 카드사가선택된, handleClickOpenModal, handleClickCloseModal, handleClickCard }),
    [isModalOpen, selectedCard, 카드사가선택된, handleClickOpenModal, handleClickCloseModal, handleClickCard],
  );

  return <CardSelectModalContext.Provider value={contextValue}>{children}</CardSelectModalContext.Provider>;
}
