import { CardFormInputsType } from 'types';
import { useRef } from 'react';

const useHandleFormInput = () => {
  const inputRefs = useRef(new Array(10));
  const cardFormInputs: CardFormInputsType = {
    cardNumbers: {
      ref: inputRefs.current[0],
    },
    expireDate: {
      month: {
        ref: inputRefs.current[1],
      },
      year: {
        ref: inputRefs.current[2],
      },
    },
    ownerName: {
      ref: inputRefs.current[3],
    },
    cvc: {
      ref: inputRefs.current[4],
    },
    password: {
      first: {
        ref: inputRefs.current[5],
      },
      end: {
        ref: inputRefs.current[6],
      },
    },
  };
  return { cardFormInputs };
};
export default useHandleFormInput;
