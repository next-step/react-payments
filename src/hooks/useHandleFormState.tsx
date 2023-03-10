import { useState } from 'react';
import { CardFormType } from 'types';
const initialCardFormState: CardFormType = {
  cardNumbers: {
    text: '',
    isValid: true,
  },
  expireDate: {
    month: {
      text: 'MM',
      isValid: true,
    },
    year: {
      text: 'YY',
      isValid: true,
    },
  },
  password: {
    start: {
      text: '',
      isValid: true,
    },
    end: {
      text: '',
      isValid: true,
    },
  },
  cvc: {
    text: '',
    isValid: true,
  },
  ownerName: {
    text: '',
  },
  color: {
    text: '',
    isValid: false,
  },
  company: {
    text: '',
    isValid: false,
  },
};
const useHandleFormState = () => {
  const [formState, setFormState] = useState(initialCardFormState);
  return { formState, setFormState };
};
export default useHandleFormState;
