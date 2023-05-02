import React from 'react';
import { NewCardInputContainer } from '../NewCardInput';
import SingleInput from './SingleInput';

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
  <NewCardInputContainer inputLabel={label}>
    <div className="card-password-input-container">
      <SingleInput {...firstPasswordProps} />
      <SingleInput {...secondPasswordProps} />
      <SingleInput value="*" disabled />
      <SingleInput value="*" disabled />
    </div>
  </NewCardInputContainer>
);

export default CardPasswordInput;
