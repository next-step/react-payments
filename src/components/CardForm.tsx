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

const CardRegisterForm = () => {
  const dispatch = useCardDispatch();
  const { digits, expire, name, cvc, passwords } = useCardState();
  const validation = useCardValidation();
  const [isSelectCompany, setSelectCompany] = useState(false);
  const { setModalState } = useModalState();
  const { inputRefs, nextFocus } = useNextFocus();

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
  };

  // digit 개수가 8개가 되었을 때 카드사 추정 모달 오픈
  const DIGIT_COMPANY_LENGTH = 8;
  const showCompanySelectModal = () => {
    const digitLength =
      String(digits.digit1).length + String(digits.digit2).length;

    if (digits.digit3 || digits.digit4) {
      setModalState({ type: 'SELECT_COMPANY', isShow: false });
    }

    if (digitLength !== DIGIT_COMPANY_LENGTH) {
      setSelectCompany(false);
      return;
    }
    // prettier-ignore
    if ((digitLength === DIGIT_COMPANY_LENGTH) && !isSelectCompany) {
      dispatch({
        type: 'SET_COMPANY',
        company: computeCompany(String(digits.digit1)).company,
        color: computeCompany(String(digits.digit1)).color,
      });

      setModalState({ type: 'SELECT_COMPANY', isShow: true });
      setSelectCompany(true)
    }
  };

  useEffect(() => {
    showCompanySelectModal();
  }, [digits]);

  useEffect(() => {
    inputRefs[0].current?.focus();
  }, []);

  useEffect(() => {
    const isValidDigit =
      validation.validDigit &&
      !validation.validExpire &&
      !validation.validCvc &&
      !validation.validPassword;

    const isValidExpire =
      validation.validDigit &&
      validation.validExpire &&
      !validation.validCvc &&
      !validation.validPassword;

    const isValidCvc =
      validation.validDigit &&
      validation.validExpire &&
      validation.validCvc &&
      !validation.validPassword &&
      !passwords.password1;

    if (isValidDigit) {
      nextFocus(0);
    }

    if (isValidExpire) {
      nextFocus(1);
    }

    if (isValidCvc) {
      nextFocus(2);
    }
  }, [validation]);

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
