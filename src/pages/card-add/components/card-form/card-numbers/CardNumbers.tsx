import Input from '@/components/common/input/Input';
import { CARD_NUMBER_LIMIT } from '@/domain/constant';
import { forwardRef, type RefObject } from 'react';
import useNumbers from './hook/useCardNumbers';

const createHyphen = (value: string = '') => (value.length === CARD_NUMBER_LIMIT ? '-' : '');

type CardNumberProps = {
  nextFocus: RefObject<HTMLInputElement>;
};

const CardNumbers = forwardRef(({ nextFocus }: CardNumberProps) => {
  const { inputRef, cardNumbers, handleChange } = useNumbers({ nextFocus });
  const [second, third, fourth] = inputRef;
  const firstHypen = cardNumbers ? createHyphen(Object.values(cardNumbers)[0]) : '';
  const secondHypen = cardNumbers ? createHyphen(Object.values(cardNumbers)[1]) : '';
  const thridHypen = cardNumbers ? createHyphen(Object.values(cardNumbers)[2]) : '';

  return (
    <>
      <Input
        type="text"
        name="first"
        onChange={handleChange}
        value={cardNumbers?.first ?? ''}
        maxLength={CARD_NUMBER_LIMIT}
      />
      {firstHypen}
      <Input
        type="text"
        name="second"
        onChange={handleChange}
        value={cardNumbers?.second ?? ''}
        maxLength={CARD_NUMBER_LIMIT}
        ref={second}
      />
      {secondHypen}
      <Input
        type="password"
        name="third"
        onChange={handleChange}
        value={cardNumbers?.third ?? ''}
        maxLength={CARD_NUMBER_LIMIT}
        ref={third}
      />
      {thridHypen}
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
});

export default CardNumbers;
