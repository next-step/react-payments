import React, { useEffect, useState } from 'react';
import {
  useCardDispatch,
  useCardState,
  useCardValidation,
} from '../context/CardContext';
import InputCvc from './form/InputCvc';
import InputDigit from './form/InputDigit';
import InputExpire from './form/InputExpire';
import InputName from './form/InputName';
import InputPassword from './form/InputPassword';
import { useModalState } from '../context/ModalContext';
import { computeCompany } from '../utils/form';
import styled from '@emotion/styled';
import { DigitType } from '../type/card';
import useNextFocus from '../hook/useNextFocus';

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
  const { inputRefs, nextFocus } = useNextFocus();
  const validation = useCardValidation();

  const onChangeValue = (e: React.ChangeEvent) => {
    dispatch({
      type: 'SET_CARD_VALUE',
      target: e.target as HTMLInputElement,
    });
  };

  const onChangeDigit = (e: React.ChangeEvent) => {
    const eventTarget = e.target as HTMLInputElement;
    dispatch({
      type: 'SET_CARD_VALUE',
      target: eventTarget,
    });

    const isFocusCompanyDigit =
      eventTarget.name === 'digit1' || eventTarget.name === 'digit2';
    if (isFocusCompanyDigit) {
      setIsFocusCompany(true);
    } else {
      setIsFocusCompany(false);
      setModalState({ type: null, isShow: false });
    }
  };

  const showCompanySelectModal = () => {
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
    showCompanySelectModal();
  }, [digits, isFocusCompany]);

  useEffect(() => {
    inputRefs[0].current?.focus();
  }, []);

  useEffect(() => {
    if (
      validation.validDigit &&
      !validation.validExpire &&
      !validation.validCvc &&
      !validation.validPassword
    ) {
      nextFocus(0);
    }

    if (
      validation.validDigit &&
      validation.validExpire &&
      !validation.validCvc &&
      !validation.validPassword
    ) {
      nextFocus(1);
    }

    if (
      validation.validDigit &&
      validation.validExpire &&
      validation.validCvc &&
      !validation.validPassword &&
      !passwords.password1
    ) {
      nextFocus(2);
    }
  }, [inputRefs, validation]);

  return (
    <S.Form>
      <InputDigit
        onChange={onChangeDigit}
        value={digits as DigitType}
        refs={inputRefs[0]}
      />
      <InputExpire
        onChange={onChangeValue}
        value={expire}
        refs={inputRefs[1]}
      />
      <InputName onChange={onChangeValue} value={name} />
      <InputCvc onChange={onChangeValue} value={cvc} refs={inputRefs[2]} />
      <InputPassword
        onChange={onChangeValue}
        value={passwords}
        refs={inputRefs[3]}
      />
    </S.Form>
  );
};

export default CardRegisterForm;
