import { ChangeEvent, KeyboardEvent, RefObject } from 'react';
import {
  CARD_INPUT_COLOR,
  CARD_INPUT_PASSWORD_FONT_SIZE,
  CARD_INPUT_PASSWORD_FONT_WEIGHT,
  CARD_INPUT_TEXT_FONT_SIZE,
  CARD_INPUT_TEXT_FONT_WEIGHT,
} from './constants/cardInputStyles';
import { Grid, HStack, Label, TextField, Typography, VStack } from '@/shared/components';
import { styleToken } from '@/shared/styles';
import { StyleProps } from '@/shared/types';

const INITIAL_CARD_NUMBER_PARTS = ['', '', '', ''];
const CARD_NUMBER_PART_LENGTH = INITIAL_CARD_NUMBER_PARTS.length;

type CardNumberInputProps = Partial<{
  id: string;
  values: string[];
  label: string;
  refs: RefObject<HTMLInputElement>[];
  onChange: (index: number) => (event: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (index: number) => (event: KeyboardEvent<HTMLInputElement>) => void;
  onKeyUp: (index: number) => (event: KeyboardEvent<HTMLInputElement>) => void;
  _label: StyleProps;
  _inputRoot: StyleProps;
  _input: StyleProps;
}>;

export const CardNumberInput = ({
  id,
  values = [],
  label,
  refs,
  onChange,
  onKeyDown,
  onKeyUp,
  _label,
  _inputRoot,
  _input,
}: CardNumberInputProps) => (
  <VStack>
    {label && (
      <Label {...(id && { htmlFor: `${id}-0` })} variant="caption" color={styleToken.color.gray700} {..._label}>
        {label}
      </Label>
    )}
    <Grid gridTemplateColumns={`repeat(${values.length}, 1fr)`} alignItems="center" {..._inputRoot}>
      {values.map((value, index) => {
        const isLastCardNumberPart = index === value.length - 1;
        const isPartComplete = value.length === CARD_NUMBER_PART_LENGTH;
        const inputType = index <= 1 ? 'text' : 'password';
        return (
          <HStack key={index} alignItems="center">
            <TextField
              key={index}
              {...(id && { id: `${id}-${index}` })}
              ref={refs?.[index]}
              type={inputType}
              variant="unstyled"
              value={value}
              onChange={onChange?.(index)}
              onKeyDown={onKeyDown?.(index)}
              onKeyUp={onKeyUp?.(index)}
              maxLength={4}
              color={CARD_INPUT_COLOR}
              textAlign="left"
              width="40px"
              fontSize={inputType === 'text' ? CARD_INPUT_TEXT_FONT_SIZE : CARD_INPUT_PASSWORD_FONT_SIZE}
              fontWeight={inputType === 'text' ? CARD_INPUT_TEXT_FONT_WEIGHT : CARD_INPUT_PASSWORD_FONT_WEIGHT}
              {..._input}
            />
            {!isLastCardNumberPart && isPartComplete && (
              <Typography
                variant="title"
                minWidth="10px"
                margin="0 8px"
                color={CARD_INPUT_COLOR}
                fontWeight={CARD_INPUT_TEXT_FONT_WEIGHT}
                fontSize={CARD_INPUT_TEXT_FONT_SIZE}
                textAlign="center"
              >
                -
              </Typography>
            )}
          </HStack>
        );
      })}
    </Grid>
  </VStack>
);

CardNumberInput.displayName = 'CardNumberInput';
