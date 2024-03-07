import Input from '@/components/common/input/Input';
import useCardExpirationDate from './hook/useCardExpirationDate';

const MAX_LENGTH = 2;

const CardExpirationDate = () => {
  const { month, year, handleChange } = useCardExpirationDate();

  return (
    <>
      <Input
        type="text"
        name="month"
        value={month}
        onChange={handleChange}
        placeholder="MM"
        maxLength={MAX_LENGTH}
      />
      <Input
        type="text"
        name="year"
        value={year}
        onChange={handleChange}
        placeholder="YY"
        maxLength={MAX_LENGTH}
      />
    </>
  );
};

export default CardExpirationDate;
