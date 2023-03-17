import { ChangeEvent, useEffect, useRef } from 'react';
import { Input, InputContainer } from '@components/Common';
import { nextSiblingInputFocus, renderTextDivider } from '@/utils';
import FieldContainer from './FieldContainer';
import { LIMIT_INPUT_LENGTH, REGEX } from '@/constants';
import { useCardForm } from '@/context/CardFormContext';
import { useCardFormValidator } from '@/context/CardFormValidator';

type CardNumberFieldProps = {
  title: string;
  minLength: number;
  maxLength: number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

function CardNumberField({ title, onChange, minLength = 0, maxLength = 4 }: CardNumberFieldProps) {
  const { cardNumber1, cardNumber2, cardNumber3, cardNumber4 } = useCardForm();
  const {
    isValidCardForm: { isValid, msg },
  } = useCardFormValidator();

  const fieldRef = useRef<HTMLDivElement | null>(null);
  const cardNumber1Ref = useRef<HTMLInputElement | null>(null);
  const cardNumber2Ref = useRef<HTMLInputElement | null>(null);
  const cardNumber3Ref = useRef<HTMLInputElement | null>(null);
  const cardNumber4Ref = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (cardNumber1.length === LIMIT_INPUT_LENGTH.CARD_NUMBER.MAX) cardNumber2Ref.current?.focus();
  }, [cardNumber1]);

  useEffect(() => {
    if (cardNumber2.length === LIMIT_INPUT_LENGTH.CARD_NUMBER.MAX) cardNumber3Ref.current?.focus();
  }, [cardNumber2]);

  useEffect(() => {
    if (cardNumber3.length === LIMIT_INPUT_LENGTH.CARD_NUMBER.MAX) cardNumber4Ref.current?.focus();
  }, [cardNumber3]);

  useEffect(() => {
    if (cardNumber4.length === LIMIT_INPUT_LENGTH.CARD_NUMBER.MAX) {
      nextSiblingInputFocus(fieldRef, 0);
    }
  }, [cardNumber4]);

  return (
    <FieldContainer title={title} ref={fieldRef} msg={msg}>
      <InputContainer size="full" error={!isValid}>
        <Input
          ref={cardNumber1Ref}
          type="text"
          minLength={minLength}
          maxLength={maxLength}
          pattern={REGEX.HTML_PATTERN.ONLY_NUMBER}
          value={cardNumber1}
          name="cardNumber1"
          onChange={onChange}
          autoComplete="off"
          error={!isValid}
        />
        {renderTextDivider({ formerValue: cardNumber1, latterValue: cardNumber2, divider: '-' })}
        <Input
          ref={cardNumber2Ref}
          type="text"
          minLength={0}
          maxLength={4}
          pattern={REGEX.HTML_PATTERN.ONLY_NUMBER}
          value={cardNumber2}
          name="cardNumber2"
          onChange={onChange}
          autoComplete="off"
          error={!isValid}
        />
        {renderTextDivider({ formerValue: cardNumber2, latterValue: cardNumber3, divider: '-' })}
        <Input
          ref={cardNumber3Ref}
          type="password"
          minLength={0}
          maxLength={4}
          pattern={REGEX.HTML_PATTERN.ONLY_NUMBER}
          value={cardNumber3}
          name="cardNumber3"
          onChange={onChange}
          autoComplete="off"
          error={!isValid}
        />
        {renderTextDivider({ formerValue: cardNumber3, latterValue: cardNumber4, divider: '-' })}
        <Input
          ref={cardNumber4Ref}
          type="password"
          minLength={0}
          maxLength={4}
          pattern={REGEX.HTML_PATTERN.ONLY_NUMBER}
          value={cardNumber4}
          name="cardNumber4"
          onChange={onChange}
          autoComplete="off"
          error={!isValid}
        />
      </InputContainer>
    </FieldContainer>
  );
}

export default CardNumberField;
