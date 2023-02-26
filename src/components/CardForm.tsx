import React from 'react';
import { useCardDispatch, useCardState } from '../context/CardContext';
import InputCvc from './form/InputCvc';
import InputDigit from './form/InputDigit';
import InputExpire from './form/InputExpire';
import InputName from './form/InputName';
import InputPassword from './form/InputPassword';

const CardRegisterForm = () => {
  const dispatch = useCardDispatch();
  const { digits, expire, name, cvc, passwords } = useCardState();

  const onChangeDigit = (e: React.ChangeEvent) => {
    dispatch({
      type: 'SET_DIGIT',
      digits: {
        ...digits,
        [(e.target as HTMLInputElement).name]: (e.target as HTMLInputElement)
          .value,
      },
    });
  };

  const onChangeExpire = (e: React.ChangeEvent) => {
    dispatch({
      type: 'SET_EXPIRE',
      expire: (e.target as HTMLInputElement).value,
    });
  };

  const onChangeName = (e: React.ChangeEvent) => {
    dispatch({
      type: 'SET_NAME',
      name: (e.target as HTMLInputElement).value,
    });
  };

  const onChangeCvc = (e: React.ChangeEvent) => {
    dispatch({
      type: 'SET_CVC',
      cvc: (e.target as HTMLInputElement).value,
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
      <InputExpire onChange={onChangeExpire} value={expire} />
      <InputName onChange={onChangeName} value={name} />
      <InputCvc onChange={onChangeCvc} value={cvc} />
      <InputPassword onChange={onChangePassword} value={passwords} />
    </>
  );
};

export default CardRegisterForm;
