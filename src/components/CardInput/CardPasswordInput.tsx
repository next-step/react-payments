import { ChangeEvent } from 'react';
import {
  CARD_INPUT_COLOR,
  CARD_INPUT_PASSWORD_FONT_SIZE,
  CARD_INPUT_PASSWORD_FONT_WEIGHT,
} from './constants/cardInputStyles';
import { ONLY_NUMBERS_REGEX } from '@/constant';
import { createUseInputConfig, useInputs } from '@/hook';
import { HStack, Label, TextField, VStack } from '@/shared/components';
import { styleToken } from '@/shared/styles';

const PIN_INPUT_MAX_VALUE_LENGTH = 1;
const PIN_INPUT_ID = 'pin-input';

type PinInputProps = {
  onChange?: (value: string) => void;
};

export const CardPasswordInput = ({ onChange }: PinInputProps) => {
  const {
    values: pinInputValues,
    refs: pinInputRefs,
    handleChange,
    handleKeyDown,
  } = useInputs([
    createUseInputConfig(PIN_INPUT_MAX_VALUE_LENGTH, ONLY_NUMBERS_REGEX),
    createUseInputConfig(PIN_INPUT_MAX_VALUE_LENGTH, ONLY_NUMBERS_REGEX),
  ]);

  const onPinInputChange = (index: number) => (e: ChangeEvent<HTMLInputElement>) => {
    const newPinInputs = [...pinInputValues];
    newPinInputs[index] = e.target.value;
    handleChange(index)(e);

    onChange?.(newPinInputs.join(' '));
  };

  return (
    <VStack>
      <Label htmlFor={`${PIN_INPUT_ID}-0`} variant="caption" color={styleToken.color.gray700}>
        카드 비밀번호
      </Label>
      <HStack justifyContent="flex-start" gap="7px" marginTop="2px">
        {pinInputValues.map((pinInputValue, index) => (
          <TextField
            key={index}
            id={`${PIN_INPUT_ID}-${index}`}
            ref={pinInputRefs[index]}
            type="password"
            variant="filled"
            value={pinInputValue}
            onChange={onPinInputChange(index)}
            onKeyDown={handleKeyDown(index)}
            maxLength={PIN_INPUT_MAX_VALUE_LENGTH}
            width="43px"
            color={CARD_INPUT_COLOR}
            fontSize={CARD_INPUT_PASSWORD_FONT_SIZE}
            fontWeight={CARD_INPUT_PASSWORD_FONT_WEIGHT}
            textAlign="center"
          />
        ))}

        <TextField
          type="password"
          variant="filled"
          value="*"
          width="43px"
          color={CARD_INPUT_COLOR}
          fontSize={CARD_INPUT_PASSWORD_FONT_SIZE}
          fontWeight={CARD_INPUT_PASSWORD_FONT_WEIGHT}
          textAlign="center"
        />
        <TextField
          type="password"
          variant="filled"
          value="*"
          width="43px"
          color={CARD_INPUT_COLOR}
          fontSize={CARD_INPUT_PASSWORD_FONT_SIZE}
          fontWeight={CARD_INPUT_PASSWORD_FONT_WEIGHT}
          textAlign="center"
        />
      </HStack>
    </VStack>
  );
};

CardPasswordInput.displayName = 'CardPasswordInput';
