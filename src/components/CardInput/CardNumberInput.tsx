import { ChangeEvent } from 'react';
import {
  CARD_INPUT_COLOR,
  CARD_INPUT_PASSWORD_FONT_SIZE,
  CARD_INPUT_PASSWORD_FONT_WEIGHT,
  CARD_INPUT_TEXT_FONT_SIZE,
  CARD_INPUT_TEXT_FONT_WEIGHT,
} from './constants/cardInputStyles';
import { useInputs } from '@/hook';
import { Grid, HStack, Label, TextField, Typography, VStack } from '@/shared/components';
import { styleToken } from '@/shared/styles';

const INITIAL_CARD_NUMBER_PARTS = ['', '', '', ''];
const CARD_NUMBER_PART_LENGTH = INITIAL_CARD_NUMBER_PARTS.length;
const CARD_NUMBER_PART_ID = 'card-number-part';

type CardNumberInputProps = {
  onChange?: (value: string) => void;
};
export const CardNumberInput = ({ onChange }: CardNumberInputProps) => {
  const {
    values: cardNumberParts,
    refs: inputRefs,
    handleChange,
    handleKeyDown,
  } = useInputs({
    inputCount: CARD_NUMBER_PART_LENGTH,
    maxLength: 4,
    pattern: /^[0-9]*$/,
  });

  const onCardNumberPartChange = (index: number) => (e: ChangeEvent<HTMLInputElement>) => {
    const newCardNumberParts = [...cardNumberParts];
    newCardNumberParts[index] = e.target.value;
    handleChange(index)(e);

    onChange?.(newCardNumberParts.join(' '));
  };

  return (
    <VStack>
      <Label htmlFor={`${CARD_NUMBER_PART_ID}-0`} variant="caption" color={styleToken.color.gray700}>
        카드 번호
      </Label>
      <Grid
        gridTemplateColumns={`repeat(${cardNumberParts.length}, 1fr)`}
        alignItems="center"
        backgroundColor={styleToken.color.gray200}
        borderRadius="7px"
        padding="0 45px"
      >
        {cardNumberParts.map((cardNumberPart, index) => {
          const isLastCardNumberPart = index === cardNumberPart.length - 1;
          const isPartComplete = cardNumberPart.length === CARD_NUMBER_PART_LENGTH;
          const inputType = index <= 1 ? 'text' : 'password';
          return (
            <HStack key={index} alignItems="center">
              <TextField
                key={index}
                id={`${CARD_NUMBER_PART_ID}-${index}`}
                ref={inputRefs[index]}
                type={inputType}
                variant="unstyled"
                value={cardNumberPart}
                onChange={onCardNumberPartChange(index)}
                onKeyDown={handleKeyDown(index)}
                maxLength={4}
                color={CARD_INPUT_COLOR}
                textAlign="left"
                width="40px"
                fontSize={inputType === 'text' ? CARD_INPUT_TEXT_FONT_SIZE : CARD_INPUT_PASSWORD_FONT_SIZE}
                fontWeight={inputType === 'text' ? CARD_INPUT_TEXT_FONT_WEIGHT : CARD_INPUT_PASSWORD_FONT_WEIGHT}
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
};

CardNumberInput.displayName = 'CardNumberInput';
