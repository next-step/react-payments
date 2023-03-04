import { useState } from 'react';

import { useFormContext } from '@/components/common/Form/FormContext';
import { CardCompanyModal } from '@/components/domain';
import { CardForm } from '@/components/domain';
import { Button, CreditCard } from '@/components/UI';
import { useRouter } from '@/hooks/useRouter';
import { getItem, setItem } from '@/storage/storage';
import { StorageKey } from '@/storage/storageKey';
import { type CardFormType, CardKey } from '@/types';

export const CardRegister = () => {
  const { dispatch, getFormData, handleFormInput } = useFormContext();
  const form = getFormData().current as CardFormType;

  const { go } = useRouter();

  const cardDisplayInfo = {
    [CardKey.CARD_NUMBERS]: form[CardKey.CARD_NUMBERS],
    [CardKey.OWNER_NAME]: form[CardKey.OWNER_NAME],
    [CardKey.EXPIRE_DATE]: form[CardKey.EXPIRE_DATE],
    [CardKey.CARD_COMPANY]: form[CardKey.CARD_COMPANY],
  };

  const isAllValid = Object.values(form).every((input) => input.isValid);

  const [open, setOpen] = useState(true);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  const handleSelectCard = (company: string) => {
    handleFormInput(getFormData(), CardKey.CARD_COMPANY)(company);
    handleClose();
    dispatch();
  };

  const handleSubmit = () => {
    const newCard = Object.entries(form).reduce(
      (cardState, [cardKey, cardForm]) => {
        const { isValid, ...cardData } = { ...cardForm };
        return { ...cardState, [cardKey]: cardData };
      },
      {}
    );

    setItem(StorageKey.CARD_LIST, [
      ...(getItem(StorageKey.CARD_LIST) ?? []),
      {
        ...newCard,
        [CardKey.UID]: Date.now(),
        [CardKey.CREATE_DATE]: Date.now(),
      },
    ]);
    go('/register-confirm');
  };

  return (
    <>
      <CreditCard cardInfo={cardDisplayInfo} onClick={handleOpen} />
      <CardForm />
      <Button
        css={{ position: 'absolute', bottom: '$5', width: '$11' }}
        disabled={!isAllValid}
        onClick={handleSubmit}
      >
        추가하기
      </Button>
      {open && (
        <CardCompanyModal onClose={handleClose} onConfirm={handleSelectCard} />
      )}
    </>
  );
};
