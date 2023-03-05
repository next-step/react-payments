import { useRef } from "react";
import { CardFormInputsType } from "types";

const useHandleCardFormInput = () => {
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

  const setCardNumbersInput = (cardNumbers: string) => {
    if (!cardFormInputs.cardNumbers.ref) return;
    cardFormInputs.cardNumbers.ref.value = cardNumbers;
  };
  const setExpireDateMonthInput = (month: string) => {
    if (!cardFormInputs.expireDate.month.ref) return;
    cardFormInputs.expireDate.month.ref.value = month;
  };
  const setOwnerNameInput = (ownerName: string) => {
    if (!cardFormInputs.ownerName.ref) return;
    cardFormInputs.ownerName.ref.value = ownerName;
  };
  const setCvcInput = (cvc: string) => {
    if (!cardFormInputs.cvc.ref) return;
    cardFormInputs.cvc.ref.value = cvc;
  };
  const setExpireDateYearInput = (year: string) => {
    if (!cardFormInputs.expireDate.year.ref) return;
    cardFormInputs.expireDate.year.ref.value = year;
  };

  const setPassWordFirstInput = (password: string) => {
    if (!cardFormInputs.password.first.ref) return;
    cardFormInputs.password.first.ref.value = password;
  };
  const setPasswordEndInput = (password: string) => {
    if (!cardFormInputs.password.end.ref) return;
    cardFormInputs.password.end.ref.value = password;
  };

  return {
    cardFormInputs,
    setCardNumbersInput,
    setExpireDateMonthInput,
    setExpireDateYearInput,
    setOwnerNameInput,
    setCvcInput,
    setPassWordFirstInput,
    setPasswordEndInput,
  };
};
export default useHandleCardFormInput;
