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
    cardNumbers: inputRefs.current[0],
    expireDateMonth: inputRefs.current[1],
    expireDateYear: inputRefs.current[2],
    ownerName: inputRefs.current[3],
    cvc: inputRefs.current[4],
    password: {
      start: inputRefs.current[5],
      end: inputRefs.current[6],
    },
  };
  const handleCardNumberInput = () => {
    const ref = cardFormInputs.cardNumbers;
    if (!ref) return;
    const cardNumbers = changeCardNumber(ref.value);
    const cardCompany = getCardNumberCompnay(cardNumbers[0]);
    ref.value = cardNumbers;
    const isNext = isValidCardNumber(cardNumbers);
    if (isNext) {
      cardFormInputs.expireDateMonth?.focus();
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
  const handleExpireMonthInput = () => {
    const monthRef = cardFormInputs.expireDateMonth;
    const yearRef = cardFormInputs.expireDateYear;
    if (!monthRef) return;
    const month = changeMonth(monthRef.value);
    monthRef.value = month;
    if (!yearRef) return;
    if (isValidExpirationDate(month)) {
      yearRef.focus();
    }

    setState((prev) => ({
      ...prev,
      expireDateMonth: {
        text: !month.length ? 'MM' : month,
        isValid: isValidExpirationDate(month),
      },
    }));
  };
  const handleExpireYearInput = () => {
    const monthRef = cardFormInputs.expireDateMonth;
    const yearRef = cardFormInputs.expireDateYear;
    const ownerNameRef = cardFormInputs.ownerName;
    if (!yearRef) return;
    const year = changeYear(yearRef.value);
    yearRef.value = year;
    if (!monthRef) return;
    const month = changeMonth(monthRef.value);
    if (isValidExpirationDate(year)) {
      yearRef.focus();
    }
    if (isValidExpirationDate(month) && isValidExpirationDate(year)) {
      ownerNameRef?.focus();
    }

    setState((prev) => ({
      ...prev,
      expireDateYear: {
        text: year,
        isValid: isValidExpirationDate(year),
      },
    }));
  };

  const handleOwnerNameInput = () => {
    const ownerNameRef = cardFormInputs.ownerName;
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
    const cvcRef = cardFormInputs.cvc;
    const passwordStartRef = cardFormInputs.password.start;

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
    const passwordStartRef = cardFormInputs.password.start;
    const passwordEndRef = cardFormInputs.password.end;
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
    handleExpireMonthInput,
    handleExpireYearInput,
    handleOwnerNameInput,
    handleSecurityInput,
    handlePasswordInput,
  };
};
export default useHandleFormInput;
