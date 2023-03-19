import { useState } from 'react';
import { CardFormType } from 'types';
const initialCardFormState: CardFormType = {
  cardNumbers: {
    text: '',
    isValid: true,
  },
  expireDateMonth: {
    text: 'MM',
    isValid: true,
  },
  expireDateYear: {
    text: 'YY',
    isValid: true,
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
