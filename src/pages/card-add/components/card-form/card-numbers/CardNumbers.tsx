import Input from '@/components/common/input/Input';
import { CARD_NUMBER_LIMIT } from '@/domain/constant';
import { type ForwardedRef, forwardRef } from 'react';
import useNumbers from './hook/useCardNumbers';

export const createHyphen = (value: string) => value && value.length === CARD_NUMBER_LIMIT && '-';

type CardNumberProps = {
  nextFocus: any;
};
const CardNumbers = forwardRef(
  ({ nextFocus }: CardNumberProps, ref: ForwardedRef<HTMLInputElement>) => {
    const { inputRef, cardNumbers, handleChange } = useNumbers({ nextFocus });
    const [second, third, fourth] = inputRef;

    return (
      <>
        <Input
          type="text"
          name="first"
          onChange={handleChange}
          value={cardNumbers?.first ?? ''}
          maxLength={CARD_NUMBER_LIMIT}
        />
        {cardNumbers && createHyphen(Object.values(cardNumbers)[0])}
        <Input
          type="text"
          name="second"
          onChange={handleChange}
          value={cardNumbers?.second ?? ''}
          maxLength={CARD_NUMBER_LIMIT}
          ref={second}
        />
        {cardNumbers && createHyphen(Object.values(cardNumbers)[1])}
        <Input
          type="password"
          name="third"
          onChange={handleChange}
          value={cardNumbers?.third ?? ''}
          maxLength={CARD_NUMBER_LIMIT}
          ref={third}
        />
        {cardNumbers && createHyphen(Object.values(cardNumbers)[2])}
        <Input
          type="password"
          name="fourth"
          onChange={handleChange}
          value={cardNumbers?.fourth ?? ''}
          maxLength={CARD_NUMBER_LIMIT}
          ref={fourth}
        />
      </>
    );
  },
);

export default CardNumbers;
