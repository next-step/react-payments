import InputBox from '@/components/common/input-box/InputBox';
import Input from '@/components/common/input/Input';
import useNumbers from './hook/useCardNumbers';

const MAX_LENGTH = 4;

export const createHyphen = (value: string) => {
  return value && value.length === MAX_LENGTH && '-';
};

const CardNumbers = () => {
  const { cardNumbers, handleChange } = useNumbers();

  return (
    <>
      <Input
        type="text"
        name="first"
        onChange={handleChange}
        value={cardNumbers?.first ?? ''}
        maxLength={MAX_LENGTH}
      />
      {cardNumbers && createHyphen(Object.values(cardNumbers)[0])}
      <Input
        type="text"
        name="second"
        onChange={handleChange}
        value={cardNumbers?.second ?? ''}
        maxLength={MAX_LENGTH}
      />
      {cardNumbers && createHyphen(Object.values(cardNumbers)[1])}
      <Input
        type="password"
        name="third"
        onChange={handleChange}
        value={cardNumbers?.third ?? ''}
        maxLength={MAX_LENGTH}
      />
      {cardNumbers && createHyphen(Object.values(cardNumbers)[2])}
      <Input
        type="password"
        name="fourth"
        onChange={handleChange}
        value={cardNumbers?.fourth}
        maxLength={MAX_LENGTH}
      />
    </>
  );
};

export default CardNumbers;
