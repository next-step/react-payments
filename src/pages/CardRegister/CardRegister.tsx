import { CardForm } from '@/components';
import { useFormContext } from '@/components/common/Form/FormContext';
import { CreditCard } from '@/components/UI';
import { Button } from '@/components/UI';
import { useRouter } from '@/hooks/useRouter';
import { getItem, setItem } from '@/storage/storage';
import { StorageKey } from '@/storage/storageKey';
import { type CardFormType, CardData, CardKey } from '@/types';

export const initialCardState: CardFormType = {
  [CardKey.CARD_NUMBERS]: {
    val: {
      1: '',
      2: '',
      3: '',
      4: '',
    },
    isValid: false,
  },
  [CardKey.EXPIRE_DATE]: {
    val: {
      month: '',
      year: '',
    },
    isValid: false,
  },
  [CardKey.CVC]: {
    val: '',
    isValid: false,
  },
  [CardKey.PASSWORD]: {
    val: {
      1: '',
      2: '',
      3: '',
      4: '',
    },
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
    [CardKey.CARD_NUMBERS]: form[CardKey.CARD_NUMBERS]?.val,
    [CardKey.OWNER_NAME]: form[CardKey.OWNER_NAME]?.val,
    [CardKey.EXPIRE_DATE]: form[CardKey.EXPIRE_DATE]?.val,
  };

  const isAllValid = Object.values(form).every((input) => input.isValid);

  const handleSubmit = () => {
    const newCard = Object.entries(form).reduce(
      (cardState, [cardKey, form]) => {
        return { ...cardState, [cardKey]: form.val };
      },
      {}
    );

    setItem(StorageKey.CARD_LIST, [
      ...(getItem(StorageKey.CARD_LIST) ?? []),
      { ...newCard, uid: Date.now(), createdDate: Date.now() },
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
