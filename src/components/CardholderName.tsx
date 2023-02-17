import { useState, ChangeEvent } from 'react';

type CardNameProps = {
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const CardholderName = ({ name, onChange }: CardNameProps) => {
  return (
    <div className="input-container">
      <span className="input-title">카드 소유자 이름(선택)</span>
      <span>{name.length}/30</span>
      <input
        type="text"
        className="input-basic"
        placeholder="카드에 표시된 이름과 동일하게 입력하세요."
        maxLength={30}
        value={name}
        onChange={onChange}
      />
    </div>
  );
};

export default CardholderName;
