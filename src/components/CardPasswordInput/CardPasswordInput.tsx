import React from 'react';

type TPasswordProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

interface CardPasswordInputProps {
  firstPasswordProps: TPasswordProps;
  secondPasswordProps: TPasswordProps;
  label: string;
}

const CardPasswordInput = ({
  firstPasswordProps,
  secondPasswordProps,
  label,
}: CardPasswordInputProps) => (
  <div className="input-container">
    <div className="input-label">{label}</div>
    <div className="card-password-input-container">
      <input
        className="card-password-input"
        type="password"
        maxLength={1}
        value={firstPasswordProps.value}
        onChange={firstPasswordProps.onChange}
      />
      <input
        className="card-password-input"
        type="password"
        maxLength={1}
        value={secondPasswordProps.value}
        onChange={secondPasswordProps.onChange}
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

export default CardPasswordInput;
