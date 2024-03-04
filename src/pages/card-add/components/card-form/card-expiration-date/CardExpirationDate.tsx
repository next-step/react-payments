import InputBox from '@/components/common/input-box/InputBox';
import Input from '@/components/common/input/Input';
import useCardExpirationDate from './hook/useCardExpirationDate';

const MAX_LENGTH = 2;

const CardExpirationDate = () => {
  const { handleChange, refs } = useCardExpirationDate();

  return (
    <InputBox className="w-50">
      <Input
        type="text"
        name="month"
        onChange={(e) => handleChange(e, 0)}
        placeholder="MM"
        maxLength={MAX_LENGTH}
        ref={(el) => {
          if (el) refs.current[0] = el;
        }}
      />
      <Input
        type="text"
        name="year"
        onChange={(e) => handleChange(e, 1)}
        placeholder="YY"
        maxLength={MAX_LENGTH}
        ref={(el) => {
          if (el) refs.current[1] = el;
        }}
      />
    </InputBox>
  );
};

export default CardExpirationDate;
