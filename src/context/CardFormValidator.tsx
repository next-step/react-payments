import { PropsWithChildren, createContext, useContext, useEffect, useMemo, useState } from 'react';
import { useCardForm } from './CardFormContext';
import { LIMIT_INPUT_LENGTH } from '@/constants';

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
        msg: '카드숫자는 16자리가 되어야 합니다.',
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
        msg: 'Month, Year는 2자리를 입력해 주세요',
      });
      return;
    }

    if (Number(month) < 0 || Number(month) > 12) {
      setIsValidExpirationForm({
        isValid: false,
        msg: 'Month는 0보다 크고, 13보다 작아야 합니다.',
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
        msg: 'CVC는 3자리를 입력해 주세요',
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
        msg: 'password를 입력해주세요.',
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
        msg: '카드를 클릭해 카드회사를 선택해주세요',
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
