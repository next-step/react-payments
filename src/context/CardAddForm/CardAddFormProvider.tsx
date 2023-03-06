import {
  ChangeEvent,
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useCallback,
  useMemo,
  useState,
} from 'react';

import { ERROR_MESSAGE } from '@/constants/errorMessage';
import { CARD } from '@/constants/card';
import { validateCardForm } from '@/domain/card/validation';
import { Card } from '@/types/card';
import { assert } from '@/utils/validation';

type InitValue = {
  카드폼이입력된: boolean;
  cardForm: Card;
  setCardForm: Dispatch<SetStateAction<Card>>;
  resetCardForm: () => void;
  handleChangeCardForm: (e: ChangeEvent<HTMLInputElement>) => void;
};

const initValue: InitValue = {
  카드폼이입력된: false,
  cardForm: {
    cardNumber: {
      num1: '',
      num2: '',
      num3: '',
      num4: '',
    },
    cardExpiration: {
      month: '',
      year: '',
    },
    cardOwnerName: '',
    cardSecretCode: '',
    cardPassword: {
      num1: '',
      num2: '',
    },
    cardAlias: '',
    cardCompany: {
      name: '',
      color: '',
    },
  },
  setCardForm: () => null,
  resetCardForm: () => null,
  handleChangeCardForm: () => null,
};

export const CardAddFormContext = createContext(initValue);

export default function CardAddFormProvider({ children }: PropsWithChildren) {
  const [cardForm, setCardForm] = useState<Card>(initValue.cardForm);

  const 카드번호가입력된 = Object.values(cardForm.cardNumber).every((number) => {
    return number.length === CARD.NUMBER.LENGTH;
  });
  const 카드만료일이입력된 = Object.values(cardForm.cardExpiration).every(
    (expiration) => expiration.length === CARD.EXPIRATION.LENGTH,
  );
  const 카드보안코드가입력된 = cardForm.cardSecretCode.length === CARD.SECRET_CODE.LENGTH;
  const 카드비밀번호가입력된 = Object.values(cardForm.cardPassword).every(
    (password) => password.length === CARD.PASSWORD.LENGTH,
  );
  const 카드사가입력된 = Object.values(cardForm.cardCompany).every((company) => company.length > 0);

  const 카드폼이입력된 = [
    카드번호가입력된,
    카드만료일이입력된,
    카드보안코드가입력된,
    카드비밀번호가입력된,
    카드사가입력된,
  ].every((isValid) => isValid === true);

  const resetCardForm = () => {
    setCardForm(initValue.cardForm);
  };

  const handleChangeCardForm = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { type } = e.target.dataset;
      const { name, value } = e.target;

      if (!type) {
        return;
      }

      assert(type in initValue.cardForm, ERROR_MESSAGE.INPUT.COMMON.INVALID_TYPE(type));

      validateCardForm({ type, name, value, cardForm });

      const stringValueTypes = [CARD.OWNER_NAME.TYPE, CARD.SECRET_CODE.TYPE, CARD.ALIAS.TYPE];
      if (stringValueTypes.some((stringValueType) => stringValueType === type)) {
        setCardForm((cardForm) => ({
          ...cardForm,
          [type]: value,
        }));

        return;
      }

      setCardForm((cardForm) => ({
        ...cardForm,
        [type]: {
          ...cardForm[type],
          [name]: value,
        },
      }));
    },
    [cardForm],
  );

  const contextValue = useMemo(
    () => ({ 카드폼이입력된, cardForm, setCardForm, resetCardForm, handleChangeCardForm }),
    [카드폼이입력된, cardForm, handleChangeCardForm],
  );

  return <CardAddFormContext.Provider value={contextValue}>{children}</CardAddFormContext.Provider>;
}
