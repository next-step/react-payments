import { CardFormInputsType, CardFormType } from 'types';
import { useRef } from 'react';
import {
  changeCardNumber,
  changeCardSecurityInput,
  changeMonth,
  changeOwnerName,
  changePassword,
  changeYear,
} from 'utils/InputChange';
import {
  isValidCardNumber,
  isValidExpirationDate,
  isValidPasswordNumber,
  isValidSecurityCode,
} from 'utils/InputValidation';
import { getCardNumberCompnay } from 'utils/Card';
interface PropsType {
  state: CardFormType;
  setState: React.Dispatch<React.SetStateAction<CardFormType>>;
}
const useHandleFormInput = ({ state, setState }: PropsType) => {
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
      start: {
        ref: inputRefs.current[5],
      },
      end: {
        ref: inputRefs.current[6],
      },
    },
  };
  const handleCardNumberInput = () => {
    const ref = cardFormInputs.cardNumbers.ref;
    if (!ref) return;
    const cardNumbers = changeCardNumber(ref.value);
    const cardCompany = getCardNumberCompnay(cardNumbers[0]);
    ref.value = cardNumbers;
    const isNext = isValidCardNumber(cardNumbers);
    if (isNext) {
      cardFormInputs.expireDate.month.ref?.focus();
    }
    setState((prev) => ({
      ...prev,
      cardNumbers: {
        text: cardNumbers,
        isValid: isValidCardNumber(cardNumbers),
      },
      company: {
        text: cardCompany,
        isValid: true,
      },
    }));
  };
  const handleExpireInput = () => {
    const monthRef = cardFormInputs.expireDate.month.ref;
    const yearRef = cardFormInputs.expireDate.year.ref;

    const ownerNameRef = cardFormInputs.ownerName.ref;

    if (!monthRef) return;
    const month = changeMonth(monthRef.value);
    monthRef.value = month;
    if (!yearRef) return;
    const year = changeYear(yearRef.value);
    yearRef.value = year;

    if (isValidExpirationDate(month)) {
      yearRef.focus();
    }
    if (isValidExpirationDate(month) && isValidExpirationDate(year)) {
      ownerNameRef?.focus();
    }

    setState((prev) => ({
      ...prev,
      expireDate: {
        month: {
          text: !month.length ? 'MM' : month,
          isValid: isValidExpirationDate(month),
        },
        year: {
          text: year,
          isValid: isValidExpirationDate(year),
        },
      },
    }));
  };
  const handleOwnerNameInput = () => {
    const ownerNameRef = cardFormInputs.ownerName.ref;
    if (!ownerNameRef) return;
    const ownerName = changeOwnerName(ownerNameRef.value);
    ownerNameRef.value = ownerName;
    setState((prev) => ({
      ...prev,
      ownerName: {
        text: ownerName.length ? ownerName : 'Name',
      },
    }));
  };
  const handleSecurityInput = () => {
    const cvcRef = cardFormInputs.cvc.ref;
    const passwordStartRef = cardFormInputs.password.start.ref;

    if (!cvcRef) return;
    const securityCode = cvcRef.value;
    cvcRef.value = changeCardSecurityInput(securityCode);
    const isNext = isValidSecurityCode(securityCode);
    if (isNext) {
      passwordStartRef?.focus();
    }
    setState((prev) => ({
      ...prev,
      cvc: {
        text: securityCode,
        isValid: isValidSecurityCode(securityCode),
      },
    }));
  };
  const handlePasswordInput = () => {
    const passwordStartRef = cardFormInputs.password.start.ref;
    const passwordEndRef = cardFormInputs.password.end.ref;
    if (!passwordStartRef || !passwordEndRef) return;
    const passWordStart = changePassword(passwordStartRef.value);
    const passWordEnd = changePassword(passwordEndRef.value);
    passwordStartRef.value = passWordStart;
    passwordEndRef.value = passWordEnd;
    const isNext = isValidPasswordNumber(passWordStart);
    if (isNext) {
      passwordEndRef.focus();
    }
    setState((prev) => ({
      ...prev,
      password: {
        start: {
          text: passWordStart,
          isValid: isValidPasswordNumber(passWordStart),
        },
        end: {
          text: passWordEnd,
          isValid: isValidPasswordNumber(passWordEnd),
        },
      },
    }));
  };

  return {
    cardFormInputs,
    handleCardNumberInput,
    handleExpireInput,
    handleOwnerNameInput,
    handleSecurityInput,
    handlePasswordInput,
  };
};
export default useHandleFormInput;
