import { useEffect } from 'react';

import { useFormContext } from '@/components/common/Form/FormContext';
import { CardCompanyModal } from '@/components/domain';
import { CardForm } from '@/components/domain';
import { Button, CreditCard } from '@/components/UI';
import { useModal } from '@/components/UI/Modal';
import { useRouter } from '@/hooks/useRouter';
import { createCard } from '@/storage/service';
import {
  type CardFormType,
  CardCompanyValues,
  CardData,
  CardKey,
} from '@/types';

export const CardRegister = () => {
  const { getFormData, handleFormInput } = useFormContext();
  const form = getFormData().current as CardFormType;
  const isFullPublicCardNumber =
    form?.CARD_NUMBERS?.[1]?.length === 4 &&
    form?.CARD_NUMBERS?.[2]?.length === 4;

  const {
    isOpen: open,
    open: handleOpen,
    close: handleClose,
  } = useModal(false);

  const { go } = useRouter();

  const cardDisplayInfo = {
    [CardKey.CARD_NUMBERS]: form[CardKey.CARD_NUMBERS],
    [CardKey.OWNER_NAME]: form[CardKey.OWNER_NAME],
    [CardKey.EXPIRE_DATE]: form[CardKey.EXPIRE_DATE],
    [CardKey.CARD_COMPANY]: form[CardKey.CARD_COMPANY],
  };

  const isAllValid = Object.values(form).every((input) => input.isValid);

  const handleSubmit = () => {
    const newCard = generateCardObj(form) as unknown as CardData;
    createCard(newCard);
    go('/register-confirm');
  };

  useEffect(() => {
    if (isFullPublicCardNumber) {
      const guessedCardCompany = guessCardCompanyByCardNumber(
        form.CARD_NUMBERS[1]
      );

      handleFormInput(
        getFormData(),
        CardKey.CARD_COMPANY
      )({ val: guessedCardCompany, isValid: true });
    }
  }, [isFullPublicCardNumber]);

  return (
    <>
      <CreditCard
        size="large"
        cardInfo={cardDisplayInfo}
        onClick={handleOpen}
      />
      <CardForm />
      <Button
        css={{ position: 'absolute', bottom: '$5', width: '$11' }}
        disabled={!isAllValid}
        onClick={handleSubmit}
      >
        추가하기
      </Button>
      {open && (
        <CardCompanyModal
          onClose={handleClose}
          onChange={handleFormInput(getFormData(), CardKey.CARD_COMPANY)}
        />
      )}
    </>
  );
};

const generateCardObj = (form: CardFormType) => {
  const newCard = Object.entries(form).reduce(
    (cardState, [cardKey, cardForm]) => {
      const { isValid, ...cardData } = { ...cardForm };
      return { ...cardState, [cardKey]: cardData };
    },
    {}
  ) as CardData;

  return {
    ...newCard,
    [CardKey.UID]: Date.now(),
    [CardKey.CREATE_DATE]: Date.now(),
  };
};

export const guessCardCompanyByCardNumber = (cardNumber: string) => {
  const firstNumber = cardNumber[0];
  switch (firstNumber) {
    case '1':
      return CardCompanyValues.PC;
    case '2':
      return CardCompanyValues.JUN;
    case '3':
      return CardCompanyValues.HS;
    case '4':
      return CardCompanyValues.YH;
    case '5':
      return CardCompanyValues.HO;
    case '6':
      return CardCompanyValues.TE;
    case '7':
      return CardCompanyValues.JI;
    case '8':
      return CardCompanyValues.EK;
    default:
      return '';
  }
};
