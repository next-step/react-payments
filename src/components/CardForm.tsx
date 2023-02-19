import React, { useContext } from 'react';
import { CardDispatch } from '../context/cardDispatch';
import Input from './common/Input';
import { handleDigit, handleExpire, handlePassword } from '../utils/form';
import styled from '@emotion/styled';

const S = {
  Hyphen: styled.span`
    color: #000;
  `,
};

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
      <div className="input-container">
        <span className="input-title">카드 번호</span>
        <div className="input-box">
          <Input
            id={'digit1'}
            name={'digit1'}
            onChange={(e: React.ChangeEvent) => onChangeDigit(e)}
            type={'text'}
            value={state.digit1}
            maxLength={4}
          />
          {state.digit1.length === 4 && <S.Hyphen>-</S.Hyphen>}
          <Input
            id={'digit2'}
            name={'digit2'}
            onChange={(e: React.ChangeEvent) => onChangeDigit(e)}
            type={'text'}
            value={state.digit2}
            maxLength={4}
          />
          {state.digit2.length === 4 && <S.Hyphen>-</S.Hyphen>}
          <Input
            id={'digit3'}
            name={'digit3'}
            onChange={(e: React.ChangeEvent) => onChangeDigit(e)}
            type={'password'}
            value={state.digit3}
            maxLength={4}
          />
          {state.digit3.length === 4 && <S.Hyphen>-</S.Hyphen>}
          <Input
            id={'digit4'}
            name={'digit4'}
            onChange={(e: React.ChangeEvent) => onChangeDigit(e)}
            type={'password'}
            value={state.digit4}
            maxLength={4}
          />
        </div>
      </div>

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

      <div className="input-container">
        <span className="input-title">보안코드(CVC/CVV)</span>

        <Input
          id={'cvc'}
          name={'cvc'}
          onChange={(e: React.ChangeEvent) => onChangePassword(e)}
          type={'password'}
          className={'w-25'}
          maxLength={3}
          value={state.cvc}
        />
      </div>

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
