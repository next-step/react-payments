import React, { useEffect, useState } from 'react';
import { useCardDispatch, useCardState } from '../context/CardContext';
import InputCvc from './form/InputCvc';
import InputDigit from './form/InputDigit';
import InputExpire from './form/InputExpire';
import InputName from './form/InputName';
import InputPassword from './form/InputPassword';
import { useModalState } from '../context/ModalContext';
import { computeCompany } from '../utils/form';
import styled from '@emotion/styled';

const S = {
  Form: styled.form`
    margin-top: 30px;
  `,
};

const DIGIT_COMPANY_LENGTH = 8;

const CardRegisterForm = () => {
  const dispatch = useCardDispatch();
  const { digits, expire, name, cvc, passwords } = useCardState();
  const { setModalState } = useModalState();
  const [isFocusCompany, setIsFocusCompany] = useState(false);

  const onChangeDigit = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    dispatch({
      type: 'SET_CARD_DIGIT',
      digits: {
        ...digits,
        [target.name]: target.value,
      },
    });

    const companyDigit = target.name === 'digit1' || target.name === 'digit2';
    if (companyDigit) {
      setIsFocusCompany(true);
    } else {
      setIsFocusCompany(false);
      setModalState({ type: null, isShow: false });
    }
  };

  const onChangeValue = (e: React.ChangeEvent) => {
    dispatch({
      type: 'SET_CARD_VALUE',
      target: e.target as HTMLInputElement,
    });
  };

  const onChangePassword = (e: React.ChangeEvent) => {
    dispatch({
      type: 'SET_PASSWORD',
      passwords: {
        ...passwords,
        [(e.target as HTMLInputElement).name]: (e.target as HTMLInputElement)
          .value,
      },
    });
  };

  const showCompanyModal = () => {
    const digitLength =
      String(digits.digit1).length + String(digits.digit2).length;
    if (digitLength === DIGIT_COMPANY_LENGTH && isFocusCompany) {
      dispatch({
        type: 'SET_COMPANY',
        company: computeCompany(String(digits.digit1)).company,
        color: computeCompany(String(digits.digit1)).color,
      });
      setModalState({ type: 'SELECT_COMPANY', isShow: true });
    }
  };

  useEffect(() => {
    showCompanyModal();
  }, [digits, isFocusCompany]);

  return (
    <S.Form>
      <InputDigit onChange={onChangeDigit} value={digits} />
      <InputExpire onChange={onChangeValue} value={expire} />
      <InputName onChange={onChangeValue} value={name} />
      <InputCvc onChange={onChangeValue} value={cvc} />
      <InputPassword onChange={onChangePassword} value={passwords} />
    </S.Form>
  );
};

export default CardRegisterForm;
