import { ChangeEvent, useState } from 'react';

const keepOnlyNumeric = (text: string) => {
  return text.replace(/\D/g, '');
};

const keepOnlyAlphabetHangulAndSpace = (text: string) => {
  const pattern = /[^a-zA-Z가-힣\sㄱ-ㅎㅏ-ㅣ]/g;

  return text.replace(pattern, '');
};

export default function useCreditCardTextFields() {
  const [cardInputValue, setCardInputValue] = useState({
    cardNumber: '',
    expirationMonth: '',
    expirationYear: '',
    ownerName: '',
    verificationCode: '',
    cardPassword: '',
  });

  const handleCardNumberInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    let replacedText = keepOnlyNumeric(e.target.value);
    // 카드 번호 4자리마다 -가 삽입된다.
    replacedText = replacedText.replace(/(\d{4})/g, '$1-');
    // 마지막이 "-"이면 제거한다.
    replacedText = replacedText.endsWith('-') ? replacedText.slice(0, -1) : replacedText;

    setCardInputValue({ ...cardInputValue, cardNumber: replacedText });
  };

  const handleVerificationCodeInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCardInputValue({ ...cardInputValue, verificationCode: keepOnlyNumeric(e.target.value) });
  };

  const handleCardPasswordInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCardInputValue({ ...cardInputValue, cardPassword: keepOnlyNumeric(e.target.value) });
  };

  const handleExpirationMonthInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCardInputValue({ ...cardInputValue, expirationMonth: keepOnlyNumeric(e.target.value) });
  };
  const handleExpirationYearInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCardInputValue({ ...cardInputValue, expirationYear: keepOnlyNumeric(e.target.value) });
  };

  const handleOwnerNameInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCardInputValue({ ...cardInputValue, ownerName: keepOnlyAlphabetHangulAndSpace(e.target.value) });
  };

  return {
    cardInputValue,
    handleCardNumberInputChange,
    handleVerificationCodeInputChange,
    handleCardPasswordInputChange,
    handleExpirationMonthInputChange,
    handleExpirationYearInputChange,
    handleOwnerNameInputChange,
  };
}
