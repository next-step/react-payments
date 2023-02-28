import React, { useMemo } from 'react';
import {
  CardPasswordDot,
  CardPasswordInputContainer,
} from './CardPasswordInput.style';
import { isNotNumber } from '@/utils/validate';
import { Input, TextInputProps } from '@/components';

const CardPasswordInput = ({
  onChange,
  value,
  fontColor = 'gray3',
}: Pick<TextInputProps, 'value' | 'fontColor'> & {
  onChange: (value: string) => void;
}) => {
  const InputRefs = React.useRef<HTMLInputElement[]>([]);
  const cardPasswordWidth = '45px';
  const cardPasswordArray = useMemo(
    () => ['PASSWORD', 'PASSWORD', 'DOT', 'DOT'],
    []
  );

  const handleChange = (password: string) => {
    if (isNotNumber(password)) return;
    const backspace = password === '';
    if (backspace) {
      if (!InputRefs.current[1].value) {
        InputRefs.current[0] && InputRefs.current[0].focus();
      }
      value && onChange(value.slice(0, -1));
      return;
    }

    if (InputRefs.current[0].value) {
      InputRefs.current[1] && InputRefs.current[1].focus();
    }

    onChange(value + password);
  };

  return (
    <CardPasswordInputContainer>
      {cardPasswordArray.map((item, index) => {
        switch (item) {
          case 'PASSWORD':
            return (
              <Input.TextInput
                key={index}
                ref={(ref) => {
                  if (!ref) return;
                  InputRefs.current[index] = ref;
                }}
                fontColor={fontColor}
                inputMode="numeric"
                type="password"
                label="cardPassword"
                onChange={handleChange}
                value={value?.[index] || ''}
                maxLength={1}
                width={cardPasswordWidth}
                textAlign="center"
              />
            );

          case 'DOT':
            return (
              <CardPasswordDot
                key={index}
                color={fontColor}
                size={cardPasswordWidth}
              >
                <span>•</span>
              </CardPasswordDot>
            );

          default:
            return null;
        }
      })}
    </CardPasswordInputContainer>
  );
};

export default React.memo(CardPasswordInput);
