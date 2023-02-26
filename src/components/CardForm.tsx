import React from 'react';
import { useCardDispatch, useCardState } from '../context/CardContext';
import InputCvc from './form/InputCvc';
import InputDigit from './form/InputDigit';
import InputExpire from './form/InputExpire';
import InputName from './form/InputName';
import InputPassword from './form/InputPassword';

const CardRegisterForm = () => {
  const dispatch = useCardDispatch();
  const state = useCardState();

  const onChangeDigit = (e: React.ChangeEvent) => {
    dispatch({
      type: 'SET_DIGIT',
      digits: {
        ...state.digits,
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
        ...state.passwords,
        [(e.target as HTMLInputElement).name]: (e.target as HTMLInputElement)
          .value,
      },
    });
  };

  return (
    <>
      <InputDigit onChange={onChangeDigit} value={state.digits} />
      <InputExpire onChange={onChangeExpire} value={state.expire} />
      <InputName onChange={onChangeName} value={state.name} />
      <InputCvc onChange={onChangeCvc} value={state.cvc} />
      <InputPassword onChange={onChangePassword} value={state.passwords} />
    </>
  );
};

export default CardRegisterForm;
