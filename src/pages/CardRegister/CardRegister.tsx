import { useFormContext } from '@/components/common/Form/FormContext';
import { CardForm } from '@/components/domain';
import { CreditCard } from '@/components/UI';
import { Button } from '@/components/UI';
import { useRouter } from '@/hooks/useRouter';
import { getItem, setItem } from '@/storage/storage';
import { StorageKey } from '@/storage/storageKey';
import { type CardFormType, CardKey } from '@/types';

export const initialCardState: CardFormType = {
  [CardKey.CARD_NUMBERS]: {
    1: '',
    2: '',
    3: '',
    4: '',
    isValid: false,
  },
  [CardKey.EXPIRE_DATE]: {
    month: '',
    year: '',
    isValid: false,
  },
  [CardKey.CVC]: {
    val: '',
    isValid: false,
  },
  [CardKey.PASSWORD]: {
    1: '',
    2: '',
    3: '',
    4: '',
    isValid: false,
  },
  [CardKey.OWNER_NAME]: {
    val: '',
    isValid: false,
  },
};

export const CardRegister = () => {
  const { getFormData } = useFormContext();
  const form = getFormData().current as CardFormType;

  const { go } = useRouter();

  const cardDisplayInfo = {
    [CardKey.CARD_NUMBERS]: form[CardKey.CARD_NUMBERS],
    [CardKey.OWNER_NAME]: form[CardKey.OWNER_NAME],
    [CardKey.EXPIRE_DATE]: form[CardKey.EXPIRE_DATE],
  };

  const isAllValid = Object.values(form).every((input) => input.isValid);

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
      <CreditCard cardInfo={cardDisplayInfo} />
      <CardForm />
      <Button
        css={{ position: 'absolute', bottom: '$5', width: '$11' }}
        disabled={!isAllValid}
        onClick={handleSubmit}
      >
        추가하기
      </Button>
    </>
  );
};
