import React, { useContext } from 'react';
import { CardDispatch } from '../context/cardDispatch';
import Input from './common/Input';
import { handleDigit, handleExpire, handlePassword } from '../utils/form';
import InputCvc from './form/InputCvc';
import InputDigit from './form/InputDigit';

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

      <div className="input-container">
        <span className="input-title">만료일</span>
        <div className="input-box w-50">
          <Input
            id={'expire'}
            name={'expire'}
            onChange={(e: React.ChangeEvent) => onChangeExpire(e)}
            type={'text'}
            placeholder={'MM / YY'}
            value={state.expire}
          />
        </div>
      </div>

      <div className="input-container">
        <span className="input-title">카드 소유자 이름(선택)</span>
        <span className="input-title">{state.name.length + '/30'}</span>
        <Input
          id={'name'}
          name={'name'}
          onChange={(e: React.ChangeEvent) => onChangeInput(e)}
          type={'text'}
          placeholder={'카드에 표시된 이름과 동일하게 입력하세요.'}
          maxLength={30}
          value={state.name}
        />
      </div>

      <InputCvc
        onChange={(e: React.ChangeEvent) => onChangePassword(e)}
        value={state.cvc}
      />

      <div className="input-container">
        <span className="input-title">카드 비밀번호</span>
        <Input
          id={'ps1'}
          name={'ps1'}
          onChange={(e: React.ChangeEvent) => onChangePassword(e)}
          type={'password'}
          className={'w-15'}
          maxLength={1}
          value={state.ps1}
        />
        <Input
          id={'ps2'}
          name={'ps2'}
          onChange={(e: React.ChangeEvent) => onChangePassword(e)}
          type={'password'}
          className={'w-15'}
          maxLength={1}
          value={state.ps2}
        />
        <Input
          id={'ps3'}
          name={'ps3'}
          type={'password'}
          className={'w-15'}
          disabled={true}
          placeholder={'*'}
        />
        <Input
          id={'ps4'}
          name={'ps4'}
          type={'password'}
          className={'w-15'}
          disabled={true}
          placeholder={'*'}
        />
      </div>
    </>
  );
};

export default CardRegisterForm;
