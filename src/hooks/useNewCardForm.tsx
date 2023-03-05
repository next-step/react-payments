/* eslint-disable no-alert */
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ModalContext } from 'src/contexts/ModalContext';
import { NewCardContext } from 'src/contexts/NewCardContext';
import { INewCard } from 'src/utils/types';

type InputType = React.ChangeEvent<HTMLInputElement>;

const useNewCardForm = () => {
  const navigate = useNavigate();
  const { handleCardInfo } = useContext(NewCardContext);
  const { isOpen, handleOpen } = useContext(ModalContext);
  const [creditNumber, setCreditNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [cvc, setCvc] = useState('');
  const [firstPassword, setFirstPassword] = useState('');
  const [secondPassword, setSecondPassword] = useState('');
  const [bankTitle, setBankTitle] = useState('');
  const [bgColor, setBgColor] = useState('');

  useEffect(() => {
    if (!isOpen) {
      handleOpen(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const state: INewCard = {
    creditNumber,
    expirationDate,
    customerName,
    cvc,
    firstPassword,
    secondPassword,
    bankTitle,
    bgColor,
  };

  const handleChangeCreditNumber = (e: InputType) => {
    let targetValue = e.target.value.trim();
    targetValue = targetValue
      .replace(/[^0-9]/g, '')
      .replace(/^(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})/, `$1-$2-$3-$4`)
      .replace(/-{1,3}$/g, '');
    setCreditNumber(targetValue);
  };

  const handleChangeExpirationDate = (e: InputType) => {
    let targetValue = e.target.value.trim();
    if (targetValue.length === 2) {
      // ? 1월부터 12월 사이 값 입력 Validation
      const month = Number(targetValue);
      if (month > 12 || month < 1) {
        alert('월은 1이상 12이하 숫자를 입력하세요.');
        return;
      }
    }
    if (targetValue.length === 5) {
      // ? 과거 연도 입력 Validation
      const year = Number(targetValue.split('/')[1]);
      const thisYear = Number(new Date().getFullYear().toString().slice(2, 4));
      if (year < thisYear) {
        alert('과거 연도를 입력할 수 없습니다.');
        return;
      }
    }
    targetValue = targetValue
      .replace(/[^0-9]/g, '')
      .replace(/^(\d{0,2})(\d{0,2})/, `$1/$2`)
      .replace(/\/{1}$/g, '');
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

  const handleBankTitle = (title: string) => {
    setBankTitle(title);
  };

  const handleBgColor = (color: string) => {
    setBgColor(color);
  };

  const onClickNextPage = () => {
    handleCardInfo(state);
    navigate('/card-alias', { replace: true });
  };

  const openBottomSheet = () => {
    handleOpen(true);
  };

  const handlers = {
    handleChangeCreditNumber,
    handleChangeCustomerName,
    handleChangeCvc,
    handleChangeExpirationDate,
    handleChangeFirstPassword,
    handleChangeSecondPassword,
    handleBankTitle,
    handleBgColor,
  };

  return {
    state,
    handlers,
    onClickNextPage,
    openBottomSheet,
  };
};

export default useNewCardForm;