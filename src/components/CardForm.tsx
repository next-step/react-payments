import React from 'react';
import { useCardDispatch, useCardState } from '../context/CardContext';
import InputCvc from './form/InputCvc';
import InputDigit from './form/InputDigit';
import InputExpire from './form/InputExpire';
import InputName from './form/InputName';
import InputPassword from './form/InputPassword';
import { COMPANY } from '../constant/company';

const CardRegisterForm = () => {
  const dispatch = useCardDispatch();
  const { digits, expire, name, cvc, passwords } = useCardState();

  const onChangeDigit = (e: React.ChangeEvent) => {
    dispatch({
      type: 'SET_CARD_DIGIT',
      digits: {
        ...digits,
        [(e.target as HTMLInputElement).name]: (e.target as HTMLInputElement)
          .value,
      },
    });
    // console.log(digits);

    // const isComputeStart =
    //   String(digits.digit1).length + String(digits.digit2).length === 8;
    // console.log(isComputeStart);

    // compute 함수가 작동되어야하는 조건
    // isComputeStart
    // 1. digit 1 + digit 2 의 length 가 8일 떄

    // if((e.target as HTMLInputElement))
    // console.log((e.target as HTMLInputElement).value);
  };

  const computeCardCompany = (digit1: string) => {
    // 카드숫자 첫번째 자리로 회사별 카드 추정
    const firstNum = digit1[0];
    switch (firstNum) {
      case '1':
        return COMPANY.RED_CARD;
      case '2':
        return COMPANY.BLUE_CARD;
      case '3':
        return COMPANY.GREEN_CARD;
      case '4':
        return COMPANY.PINK_CARD;
      case '5':
        return COMPANY.ORANGE_CARD;
      case '6':
        return COMPANY.GREY_CARD;
      case '7':
        return COMPANY.YELLOW_CARD;
      case '8':
        return COMPANY.AQUA_CARD;
      default:
        return null;
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

  return (
    <>
      <InputDigit onChange={onChangeDigit} value={digits} />
      <InputExpire onChange={onChangeValue} value={expire} />
      <InputName onChange={onChangeValue} value={name} />
      <InputCvc onChange={onChangeValue} value={cvc} />
      <InputPassword onChange={onChangePassword} value={passwords} />
    </>
  );
};

export default CardRegisterForm;
