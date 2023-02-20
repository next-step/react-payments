import React from 'react';

interface CardPasswordInputProps {
  password0: string;
  password0Handler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  password1: string;
  password1Handler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
}

const CardPasswordInput = (props: CardPasswordInputProps) => {
  const { password0, password1, password0Handler, password1Handler, label } =
    props;
  return (
    <div className="input-container">
      <div className="input-label">{label}</div>
      <div className="card-password-input-container">
        <input
          className="card-password-input"
          type="password"
          maxLength={1}
          value={password0}
          onChange={password0Handler}
        />
        <input
          className="card-password-input"
          type="password"
          maxLength={1}
          value={password1}
          onChange={password1Handler}
        />
        <input
          value="*"
          type="password"
          className="card-password-input disabled"
          disabled
        />
        <input
          value="*"
          type="password"
          className="card-password-input disabled"
          disabled
        />
      </div>
    </div>
  );
};

export default CardPasswordInput;
