import React from 'react';
import styled from '@emotion/styled';

interface IProps {
  onClick?: () => void;
  title?: string;
}

const CardRegisterForm = ({ onClick, title }: IProps) => {
  return (
    <>
      <div className="input-container">
        <span className="input-title">카드 번호</span>
        <div className="input-box">
          <input className="input-basic" type="text" />
          <input className="input-basic" type="text" />
          <input className="input-basic" type="password" />
          <input className="input-basic" type="password" />
        </div>
      </div>

      <div className="input-container">
        <span className="input-title">만료일</span>
        <div className="input-box w-50">
          <input className="input-basic" type="text" placeholder="MM" />
          <input className="input-basic" type="text" placeholder="YY" />
        </div>
      </div>
      <div className="input-container">
        <span className="input-title">카드 소유자 이름(선택)</span>
        <input
          type="text"
          className="input-basic"
          placeholder="카드에 표시된 이름과 동일하게 입력하세요."
        />
      </div>
      <div className="input-container">
        <span className="input-title">보안코드(CVC/CVV)</span>
        <input className="input-basic w-25" type="password" />
      </div>
      <div className="input-container">
        <span className="input-title">카드 비밀번호</span>
        <input className="input-basic w-15" type="password" />
        <input className="input-basic w-15" type="password" />
        <input className="input-basic w-15" type="password" />
        <input className="input-basic w-15" type="password" />
      </div>
    </>
  );
};

export default CardRegisterForm;
