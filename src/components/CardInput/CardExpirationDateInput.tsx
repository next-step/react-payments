import { ChangeEvent } from 'react';
import { CARD_INPUT_COLOR, CARD_INPUT_TEXT_FONT_SIZE, CARD_INPUT_TEXT_FONT_WEIGHT } from './constants/cardInputStyles';
import { ONLY_NUMBERS_REGEX } from '@/constant';
import { createUseInputConfig, useInputs } from '@/hook';
import { HStack, Label, TextField, Typography, VStack } from '@/shared/components';
import { styleToken } from '@/shared/styles';
import { validateMonthString } from '@/shared/utils';

const CARD_EXPIRATIONS_DATE_ID = 'card-expiration-date';

type CardExpirationDateInputProps = {
  onChange?: (value: string) => void;
};
export const CardExpirationDateInput = ({ onChange }: CardExpirationDateInputProps) => {
  const {
    values: cardExpirationDateParts,
    refs: inputRefs,
    handleChange,
    handleKeyUp,
  } = useInputs([createUseInputConfig(2, ONLY_NUMBERS_REGEX), createUseInputConfig(2, ONLY_NUMBERS_REGEX)]);

  const handleCardNumberPartChange = (index: number) => (e: ChangeEvent<HTMLInputElement>) => {
    const monthString = e.target.value;
    if (index === 0 && monthString.length === 2 && !validateMonthString(monthString)) {
      console.warn('월 형식이 올바르지 않습니다. (01 ~ 12)');
      return;
    }

    const newCardNumberParts = [...cardExpirationDateParts];
    newCardNumberParts[index] = monthString;

    handleChange(index)(e);
    onChange?.(newCardNumberParts.join(' '));
  };

  return (
    <VStack>
      <Label htmlFor={`${CARD_EXPIRATIONS_DATE_ID}-0`} variant="caption" color={styleToken.color.gray700}>
        만료일
      </Label>
      <HStack
        width="140px"
        alignItems="center"
        justifyContent="center"
        backgroundColor={styleToken.color.gray200}
        borderRadius="7px"
        padding="0 20px"
      >
        <TextField
          id={`${CARD_EXPIRATIONS_DATE_ID}-0`}
          ref={inputRefs[0]}
          variant="unstyled"
          value={cardExpirationDateParts[0]}
          onChange={handleCardNumberPartChange(0)}
          onKeyUp={handleKeyUp(0)}
          maxLength={2}
          width="30px"
          color={CARD_INPUT_COLOR}
          textAlign="left"
          fontSize={CARD_INPUT_TEXT_FONT_SIZE}
          fontWeight={CARD_INPUT_TEXT_FONT_WEIGHT}
          placeholder="MM"
          _placeholder={{
            fontSize: '16px',
          }}
        />
        <Typography
          variant="title"
          minWidth="10px"
          color={styleToken.color.gray500}
          fontWeight={CARD_INPUT_TEXT_FONT_WEIGHT}
          fontSize={CARD_INPUT_TEXT_FONT_SIZE}
          textAlign="center"
          margin="0 6px 0 2px"
        >
          /
        </Typography>
        <TextField
          id={`${CARD_EXPIRATIONS_DATE_ID}-1`}
          ref={inputRefs[1]}
          variant="unstyled"
          value={cardExpirationDateParts[1]}
          onChange={handleCardNumberPartChange(1)}
          onKeyUp={handleKeyUp(1)}
          maxLength={2}
          width="24px"
          color={CARD_INPUT_COLOR}
          textAlign="left"
          fontSize={CARD_INPUT_TEXT_FONT_SIZE}
          fontWeight={CARD_INPUT_TEXT_FONT_WEIGHT}
          placeholder="YY"
          _placeholder={{
            fontSize: '16px',
          }}
        />
      </HStack>
    </VStack>
  );
};

CardExpirationDateInput.displayName = 'CardExpirationDateInput';
