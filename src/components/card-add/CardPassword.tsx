import React, { Dispatch, SetStateAction } from 'react';

import Input from '../Input';

import updateValidValue from '../../utils/updateValidValue';

import { CARD_PASSWORD_LIMIT } from '../../constants/cardLimit';

import { type CardPasswordNumberType } from '../../types/CardFormType';

type CardPasswordProps = {
  cardPassword: CardPasswordNumberType;
  setCardPassword: Dispatch<SetStateAction<CardPasswordNumberType>>;
};

export default function CardPassword({
  cardPassword,
  setCardPassword,
}: CardPasswordProps) {
  const handleChangeCardPassword = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value, name } = event.target;

    updateValidValue({
      limit: CARD_PASSWORD_LIMIT,
      setter(value) {
        setCardPassword((prev) => ({
          ...prev,
          [name]: value,
        }));
      },
      value,
      isMonth: false,
      isNumber: true,
    });
  };

  return (
    <div className="input-container">
      <span className="input-title">카드 비밀번호</span>
      <Input
        variant="basic"
        className="w-15"
        type="password"
        value={cardPassword.firstNumber}
        name="firstNumber"
        onChange={handleChangeCardPassword}
      />
      <Input
        variant="basic"
        className="w-15"
        type="password"
        value={cardPassword.secondNumber}
        name="secondNumber"
        onChange={handleChangeCardPassword}
      />
      <input
        className="input-basic input-disabled w-15"
        type="password"
        value="*"
        disabled
      />
      <input
        className="input-basic input-disabled w-15"
        type="password"
        value="*"
        disabled
      />
    </div>
  );
}
