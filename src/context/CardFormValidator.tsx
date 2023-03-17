import { PropsWithChildren, createContext, useContext, useEffect, useMemo, useState } from 'react';
import { useCardForm } from './CardFormContext';
import { LIMIT_INPUT_LENGTH, VALIDATOR_MESSAGE } from '@/constants';

type Validator = {
  isValid: boolean;
  msg?: string;
};
type CardFormValidator = {
  isValidCardForm: Validator;
  isValidExpirationForm: Validator;
  isValidCVCdForm: Validator;
  isValidPasswordForm: Validator;
  isValidCardCompanyForm: Validator;
  isAllValid: boolean;
};
const CardFormValidatorContext = createContext<CardFormValidator | null>(null);

function useCardFormValidator() {
  const value = useContext(CardFormValidatorContext);
  if (!value) {
    throw new Error('useCardFormValidator는 CardFormValidatorProvider에서 사용해야합니다.');
  }

  return value;
}

function CardFormValidatorProvider({ children }: PropsWithChildren) {
  const [isValidCardForm, setIsValidCardForm] = useState<Validator>({
    isValid: false,
    msg: '',
  });
  const [isValidExpirationForm, setIsValidExpirationForm] = useState<Validator>({
    isValid: false,
    msg: '',
  });

  const [isValidCVCdForm, setIsValidCVCForm] = useState<Validator>({
    isValid: false,
    msg: '',
  });

  const [isValidPasswordForm, setIsValidPasswordForm] = useState<Validator>({
    isValid: false,
    msg: '',
  });

  const [isValidCardCompanyForm, setIsValidCardCompanyForm] = useState<Validator>({
    isValid: false,
    msg: '',
  });

  const { cardNumber1, cardNumber2, cardNumber3, cardNumber4, month, year, cvc, password1, password2, cardCompany } =
    useCardForm();

  useEffect(() => {
    const allCardNumber = `${cardNumber1}${cardNumber2}${cardNumber3}${cardNumber4}`;
    if (allCardNumber.length < 16) {
      setIsValidCardForm({
        isValid: false,
        msg: VALIDATOR_MESSAGE.CARD_NUMBER,
      });
      return;
    }
    setIsValidCardForm({
      isValid: true,
      msg: '',
    });
  }, [cardNumber1, cardNumber2, cardNumber3, cardNumber4]);

  useEffect(() => {
    if (month.length < LIMIT_INPUT_LENGTH.EXPIRATION || year.length < LIMIT_INPUT_LENGTH.EXPIRATION) {
      setIsValidExpirationForm({
        isValid: false,
        msg: VALIDATOR_MESSAGE.EXPIRATION.LENGTH,
      });
      return;
    }

    if (Number(month) < 0 || Number(month) > 12) {
      setIsValidExpirationForm({
        isValid: false,
        msg: VALIDATOR_MESSAGE.EXPIRATION.MONTH_RANGE,
      });
      return;
    }

    setIsValidExpirationForm({
      isValid: true,
      msg: '',
    });
  }, [month, year]);

  useEffect(() => {
    if (cvc.length < 3) {
      setIsValidCVCForm({
        isValid: false,
        msg: VALIDATOR_MESSAGE.CVC,
      });
      return;
    }
    setIsValidCVCForm({
      isValid: true,
      msg: '',
    });
  }, [cvc]);

  useEffect(() => {
    if (password1.length < 1 || password2.length < 1) {
      setIsValidPasswordForm({
        isValid: false,
        msg: VALIDATOR_MESSAGE.PASSWORD,
      });
      return;
    }
    setIsValidPasswordForm({
      isValid: true,
      msg: '',
    });
  }, [password1, password2]);

  useEffect(() => {
    console.log(cardCompany);
    if (!cardCompany) {
      setIsValidCardCompanyForm({
        isValid: false,
        msg: VALIDATOR_MESSAGE.CARD_COMPANY,
      });
      return;
    }
    setIsValidCardCompanyForm({
      isValid: true,
      msg: '',
    });
  }, [cardCompany]);

  const isAllValid = useMemo(
    () =>
      isValidCardForm.isValid &&
      isValidExpirationForm.isValid &&
      isValidCVCdForm.isValid &&
      isValidPasswordForm.isValid &&
      isValidCardCompanyForm.isValid,
    [
      isValidCardForm.isValid &&
        isValidExpirationForm.isValid &&
        isValidCVCdForm.isValid &&
        isValidPasswordForm.isValid &&
        isValidCardCompanyForm.isValid,
    ],
  );

  return (
    <CardFormValidatorContext.Provider
      value={{
        isValidCardForm,
        isValidExpirationForm,
        isValidCVCdForm,
        isValidPasswordForm,
        isValidCardCompanyForm,
        isAllValid,
      }}
    >
      {children}
    </CardFormValidatorContext.Provider>
  );
}

export { CardFormValidatorProvider, useCardFormValidator };
