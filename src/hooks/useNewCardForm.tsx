import React, { useState } from 'react';

type InputType = React.ChangeEvent<HTMLInputElement>;

const useNewCardForm = () => {
  const [creditNumber, setCreditNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [cvc, setCvc] = useState('');
  const [firstPassword, setFirstPassword] = useState('');
  const [secondPassword, setSecondPassword] = useState('');

  const handleChangeCreditNumber = (e: InputType) => {
    let targetValue = e.target.value.trim();
    targetValue = targetValue
      .replace(/[^0-9]/g, '')
      .replace(/^(\d{4})(\d{4})(\d{4})(\d{4})/, `$1-$2-$3-$4`);
    setCreditNumber(targetValue);
  };

  const handleChangeExpirationDate = (e: InputType) => {
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

  const handleChangeCustomerName = (e: InputType) => {
    setCustomerName(e.target.value);
  };

  const handleChangeCvc = (e: InputType) => {
    setCvc(e.target.value);
  };

  const handleChangeFirstPassword = (e: InputType) => {
    setFirstPassword(e.target.value);
  };

  const handleChangeSecondPassword = (e: InputType) => {
    setSecondPassword(e.target.value);
  };

  const state = {
    creditNumber,
    expirationDate,
    customerName,
    cvc,
    firstPassword,
    secondPassword,
  };

  const handlers = {
    handleChangeCreditNumber,
    handleChangeCustomerName,
    handleChangeCvc,
    handleChangeExpirationDate,
    handleChangeFirstPassword,
    handleChangeSecondPassword,
  };

  return {
    state,
    handlers,
  };
};

export default useNewCardForm;
