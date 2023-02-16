import { TextInput } from '@/components';
import { colors } from '@/styles/colors';
import React from 'react';
import {
  CardPasswordDot,
  CardPasswordInputContainer,
} from './CardPasswordInput.style';

type CardPasswordInputProps = {
  onChange: (value: string) => void;
  password: string;
};

const CardPasswordInput = ({ onChange, password }: CardPasswordInputProps) => {
  const secondInputRef = React.useRef<HTMLInputElement>(null);

  const handleChange = (value: string) => {
    if (!value) {
      password && onChange(password.slice(0, -1));
      return;
    }

    if (password.length === 0) {
      secondInputRef.current && secondInputRef.current.focus();
    }

    onChange(password + value);
  };

  return (
    <CardPasswordInputContainer>
      <TextInput
        fontColor="blue"
        label="cardPassword"
        onChange={handleChange}
        value={password[0] || ''}
        maxLength={1}
        width="40px"
        textAlign="center"
      />
      <TextInput
        ref={secondInputRef}
        value={password[1] || ''}
        fontColor="blue"
        label="cardPassword"
        onChange={handleChange}
        maxLength={1}
        width="45px"
        textAlign="center"
      />
      <CardPasswordDot color={colors['blue']}>
        <span>•</span>
      </CardPasswordDot>
      <CardPasswordDot color={colors['blue']}>
        <span>•</span>
      </CardPasswordDot>
    </CardPasswordInputContainer>
  );
};

export default CardPasswordInput;
