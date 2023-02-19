import React, { useContext } from 'react';
import { CardDispatch } from '../context/cardDispatch';
import { handleDigit, handleExpire, handlePassword } from '../utils/form';
import InputCvc from './form/InputCvc';
import InputDigit from './form/InputDigit';
import InputExpire from './form/InputExpire';
import InputName from './form/InputName';
import InputPassword from './form/InputPassword';

const CardRegisterForm = () => {
  const { state, dispatch } = useContext(CardDispatch);

  const onChangeInput = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    dispatch({
      ...state,
      [target.name]: target.value,
    });
  };

  const onChangeDigit = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    dispatch({
      ...state,
      [target.name]: handleDigit(target.value, target.name),
    });
  };

  const onChangeExpire = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    dispatch({
      ...state,
      [target.name]: handleExpire(target.value),
    });
  };

  const onChangePassword = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    dispatch({
      ...state,
      [target.name]: handlePassword(target.value, target.name),
    });
  };

  return (
    <>
      <InputDigit
        onChange={(e: React.ChangeEvent) => onChangeDigit(e)}
        value1={state.digit1}
        value2={state.digit2}
        value3={state.digit3}
        value4={state.digit4}
      />
      <InputExpire
        onChange={(e: React.ChangeEvent) => onChangeExpire(e)}
        value={state.expire}
      />
      <InputName
        onChange={(e: React.ChangeEvent) => onChangeInput(e)}
        value={state.name}
      />

      <InputCvc
        onChange={(e: React.ChangeEvent) => onChangePassword(e)}
        value={state.cvc}
      />

      <InputPassword
        onChange={(e: React.ChangeEvent) => onChangePassword(e)}
        value1={state.ps1}
        value2={state.ps2}
      />
    </>
  );
};

export default CardRegisterForm;
