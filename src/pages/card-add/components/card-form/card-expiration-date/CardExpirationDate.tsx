import { Input } from '@/components/common';
import { CARD_EXPIRATION_DATE_LIMIT } from '@/domain/constant';
import { forwardRef, type RefObject } from 'react';
import useCardExpirationDate from './hook/useCardExpirationDate';

type CardExpirationDateProps = {
  nextFocus: RefObject<HTMLInputElement>;
};

const CardExpirationDate = forwardRef<HTMLInputElement, CardExpirationDateProps>(
  ({ nextFocus }, ref) => {
    const { inputRef, month = '', year = '', handleChange } = useCardExpirationDate({ nextFocus });
    const [yearRef] = inputRef;

    return (
      <>
        <Input
          type="text"
          name="month"
          value={month}
          onChange={handleChange}
          placeholder="MM"
          maxLength={CARD_EXPIRATION_DATE_LIMIT}
          ref={ref}
        />
        <Input
          type="text"
          name="year"
          value={year}
          onChange={handleChange}
          placeholder="YY"
          maxLength={CARD_EXPIRATION_DATE_LIMIT}
          ref={yearRef}
        />
      </>
    );
  },
);

export default CardExpirationDate;
