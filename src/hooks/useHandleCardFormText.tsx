import { useState } from "react";
import { CardFormType } from "types";
const initialCardFormState: CardFormType = {
  cardNumbers: {
    text: "",
    isValid: false,
  },
  expireDate: {
    month: {
      text: "MM",
      isValid: false,
    },
    year: {
      text: "YY",
      isValid: false,
    },
  },
  password: {
    one: "",
    two: "",
    isValid: false,
  },
  cvc: {
    text: "",
    isValid: false,
  },
  ownerName: {
    text: "empty",
    isValid: false,
  },
  color: {
    text: "",
    isValid: false,
  },
  company: {
    text: "",
    isValid: false,
  },
};

export const useHandleCardFormText = () => {
  const [state, setState] = useState(initialCardFormState);

  return {
    state,
    setState,
  };
};

export default useHandleCardFormText;
