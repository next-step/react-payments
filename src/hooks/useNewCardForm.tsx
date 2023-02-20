import React, { useState } from 'react';

type InputType = React.ChangeEvent<HTMLInputElement>;

const useNewCardForm = () => {
  const [creditNumber, setCreditNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [cvc, setCvc] = useState('');
  const [password0, setPassword0] = useState('');
  const [password1, setPassword1] = useState('');

  const creditNumberHandler = (e: InputType) => {
    let targetValue = e.target.value.trim();
    targetValue = targetValue
      .replace(/[^0-9]/g, '')
      .replace(/^(\d{4})(\d{4})(\d{4})(\d{4})/, `$1-$2-$3-$4`);
    setCreditNumber(targetValue);
  };

  const expirationDateHandler = (e: InputType) => {
    let targetValue = e.target.value.trim();
    if (targetValue.length === 2) {
      if (Number(targetValue) > 12 || Number(targetValue) < 1) {
        // eslint-disable-next-line no-alert
        alert('월은 1이상 12이하 숫자를 입력하세요.');
        return;
      }
    }
    targetValue = targetValue
      .replace(/[^0-9]/g, '')
      .replace(/^(\d{2})(\d{2})/, `$1/$2`);
    setExpirationDate(targetValue);
  };

  const customerNameHandler = (e: InputType) => {
    setCustomerName(e.target.value);
  };

  const cvcHandler = (e: InputType) => {
    setCvc(e.target.value);
  };

  const password0Handler = (e: InputType) => {
    setPassword0(e.target.value);
  };

  const password1Handler = (e: InputType) => {
    setPassword1(e.target.value);
  };

  const state = {
    creditNumber,
    expirationDate,
    customerName,
    cvc,
    password0,
    password1,
  };

  return {
    state,
    creditNumberHandler,
    expirationDateHandler,
    customerNameHandler,
    cvcHandler,
    password0Handler,
    password1Handler,
  };
};

export default useNewCardForm;
