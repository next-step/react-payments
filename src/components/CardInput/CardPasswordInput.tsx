import { ChangeEvent, KeyboardEvent, RefObject } from 'react';
import {
  CARD_INPUT_COLOR,
  CARD_INPUT_PASSWORD_FONT_SIZE,
  CARD_INPUT_PASSWORD_FONT_WEIGHT,
} from './constants/cardInputStyles';
import { HStack, Label, TextField, VStack } from '@/shared/components';
import { styleToken } from '@/shared/styles';

const PIN_INPUT_MAX_VALUE_LENGTH = 1;
const PIN_INPUT_ID = 'pin-input';

type CardPasswordInputProps = Partial<{
  refs: RefObject<HTMLInputElement>[];
  values: string[];
  onChange: (index: number) => (event: ChangeEvent<HTMLInputElement>) => void;
  onKeyUp: (index: number) => (event: KeyboardEvent<HTMLInputElement>) => void;
}>;

export const CardPasswordInput = ({ refs, values, onChange, onKeyUp }: CardPasswordInputProps) => (
  <VStack>
    <Label htmlFor={`${PIN_INPUT_ID}-0`} variant="caption" color={styleToken.color.gray700}>
      카드 비밀번호
    </Label>
    <HStack spacing="10px" justifyContent="flex-start" marginTop="2px">
      {values?.map((pinInputValue, index) => (
        <TextField
          key={index}
          id={`${PIN_INPUT_ID}-${index}`}
          ref={refs?.[index]}
          type="password"
          variant="filled"
          value={pinInputValue}
          onChange={onChange?.(index)}
          onKeyUp={onKeyUp?.(index)}
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

CardPasswordInput.displayName = 'CardPasswordInput';
