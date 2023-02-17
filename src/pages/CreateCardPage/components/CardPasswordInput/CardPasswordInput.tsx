import { TextInput } from '@/components';
import { Colors, colors } from '@/styles/colors';
import React from 'react';
import {
  CardPasswordDot,
  CardPasswordInputContainer,
} from './CardPasswordInput.style';

type CardPasswordInputProps = {
  onChange: (value: string) => void;
  password: string;
  fontColor: Colors;
};

const CardPasswordInput = ({
  onChange,
  password,
  fontColor,
}: CardPasswordInputProps) => {
  const InputRefs = React.useRef<HTMLInputElement[]>([]);
  const CARD_PASSWORD_WIDTH = '45px';
  const cardPasswordArray = ['PASSWORD', 'PASSWORD', 'DOT', 'DOT'];

  const handleChange = (value: string) => {
    const backspace = value === '';
    if (backspace) {
      if (!InputRefs.current[1].value) {
        InputRefs.current[0] && InputRefs.current[0].focus();
      }
      password && onChange(password.slice(0, -1));
      return;
    }

    if (InputRefs.current[0].value) {
      InputRefs.current[1] && InputRefs.current[1].focus();
    }

    onChange(password + value);
  };

  return (
    <CardPasswordInputContainer>
      {cardPasswordArray.map((item, index) => {
        if (item === 'PASSWORD') {
          return (
            <TextInput
              key={`password-${index}`}
              ref={(ref) => {
                if (!ref) return;
                InputRefs.current[index] = ref;
              }}
              fontColor={fontColor}
              inputMode="numeric"
              type="password"
              label="cardPassword"
              onChange={handleChange}
              value={password[index] || ''}
              maxLength={1}
              width={CARD_PASSWORD_WIDTH}
              textAlign="center"
            />
          );
        }
        return (
          <CardPasswordDot
            key={`dot-${index}`}
            color={colors[fontColor]}
            size={CARD_PASSWORD_WIDTH}
          >
            <span>•</span>
          </CardPasswordDot>
        );
      })}
    </CardPasswordInputContainer>
  );
};

export default React.memo(CardPasswordInput);
