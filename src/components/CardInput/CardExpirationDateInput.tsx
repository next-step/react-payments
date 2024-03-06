import { ChangeEvent, KeyboardEvent, RefObject } from 'react';
import { CARD_INPUT_COLOR, CARD_INPUT_TEXT_FONT_SIZE, CARD_INPUT_TEXT_FONT_WEIGHT } from './constants/cardInputStyles';
import { HStack, Label, TextField, Typography, VStack } from '@/shared/components';
import { styleToken } from '@/shared/styles';
import { validateMonthString } from '@/shared/utils';

const CARD_EXPIRATIONS_DATE_ID = 'card-expiration-date';

type CardExpirationDateInputProps = Partial<{
  refs: RefObject<HTMLInputElement>[];
  values: string[];
  onChange: (index: number) => (event: ChangeEvent<HTMLInputElement>) => void;
  onKeyUp: (index: number) => (event: KeyboardEvent<HTMLInputElement>) => void;
}>;

export const CardExpirationDateInput = ({ refs, values, onChange, onKeyUp }: CardExpirationDateInputProps) => {
  const handleCardNumberPartChange = (index: number) => (e: ChangeEvent<HTMLInputElement>) => {
    const datesString = e.target.value;
    if (index === 0 && datesString.length === 2 && !validateMonthString(datesString)) {
      console.warn('월 형식이 올바르지 않습니다. (01 ~ 12)');
      return;
    }

    onChange?.(index)(e);
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
          ref={refs?.[0]}
          variant="unstyled"
          value={values?.[0]}
          onChange={handleCardNumberPartChange(0)}
          onKeyUp={onKeyUp?.(0)}
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
          ref={refs?.[1]}
          variant="unstyled"
          value={values?.[1]}
          onChange={handleCardNumberPartChange(1)}
          onKeyUp={onKeyUp?.(1)}
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
