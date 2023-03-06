import { createContext, PropsWithChildren, useCallback, useMemo, useState } from 'react';

import { CARD } from '@/constants/card';

import { useCardAddForm } from '../CardAddForm';

type InitValue = {
  isModalOpen: boolean;
  카드사가선택된: boolean;
  handleClickOpenModal: () => void;
  handleClickCloseModal: () => void;
  handleClickCard: ({ name, color }: { name: string; color: string }) => void;
};

const initValue: InitValue = {
  isModalOpen: true,
  카드사가선택된: false,
  handleClickOpenModal: () => null,
  handleClickCloseModal: () => null,
  handleClickCard: () => null,
};

export const CardCompanyModalContext = createContext<InitValue>(initValue);

export default function CardSelectModalProvider({ children }: PropsWithChildren) {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const {
    cardForm: { cardCompany },
    setCardForm,
  } = useCardAddForm();

  const 카드사가선택된 = cardCompany.name !== '';

  const handleClickOpenModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const handleClickCloseModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const handleClickCard = useCallback(
    ({ name, color }: { name: string; color: string }) => {
      if (!name || !color) {
        return;
      }

      setCardForm((cardForm) => ({
        ...cardForm,
        [CARD.COMPANY.TYPE]: {
          ...cardForm[CARD.COMPANY.TYPE],
          name,
          color,
        },
      }));

      setIsModalOpen(false);
    },
    [setCardForm],
  );

  const contextValue = useMemo(
    () => ({
      isModalOpen,
      카드사가선택된,
      handleClickOpenModal,
      handleClickCloseModal,
      handleClickCard,
    }),
    [isModalOpen, 카드사가선택된, handleClickOpenModal, handleClickCloseModal, handleClickCard],
  );

  return <CardCompanyModalContext.Provider value={contextValue}>{children}</CardCompanyModalContext.Provider>;
}
