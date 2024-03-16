import Input from '@/components/common/input/Input';
import useCardExpirationDate from './hook/useCardExpirationDate';
import { CARD_EXPIRATION_DATE_LIMIT } from '@/domain/constant';
import { ForwardedRef, forwardRef } from 'react';

const CardExpirationDate = forwardRef(
  ({ nextFocus }: { nextFocus: any }, ref: ForwardedRef<HTMLInputElement>) => {
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
