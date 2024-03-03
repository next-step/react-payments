import InputBox from '@/components/common/input-box/InputBox';
import Input from '@/components/common/input/Input';
import { CardInfoContext } from '@/provider/CardInfoProvider';
import { ChangeEvent, useContext, useRef } from 'react';

const MAX_LENGTH = 4;
const REGEX = /[^0-9]/;
const CardNumbers = () => {
  const { handleCardState } = useContext(CardInfoContext);

  const inputRefs = useRef<Array<HTMLInputElement>>([]);

  const handleCardNumbers = (e: ChangeEvent<HTMLInputElement>, idx: number) => {
    const { name, value } = e.target;
    if (REGEX.test(value)) {
      if (inputRefs.current[idx]) {
        const inputValue = inputRefs.current[idx].value;
        inputRefs.current[idx].value = inputValue.replace(/\D/g, '');
      }
    }
    if (!REGEX.test(value)) {
      handleCardState({ [name]: value });
    }
  };

  return (
    <InputBox className="input-box">
      <Input
        type="text"
        name="cardNumber"
        onChange={(e) => handleCardNumbers(e, 0)}
        className="input-basic"
        maxLength={MAX_LENGTH}
        ref={(el) => {
          if (el) inputRefs.current[0] = el;
        }}
      />
      <Input
        type="text"
        name="cardNumber"
        onChange={(e) => handleCardNumbers(e, 1)}
        className="input-basic"
        maxLength={MAX_LENGTH}
        ref={(el) => {
          if (el) inputRefs.current[1] = el;
        }}
      />
      <Input
        type="password"
        name="cardNumber"
        onChange={(e) => handleCardNumbers(e, 2)}
        className="input-basic"
        maxLength={MAX_LENGTH}
        ref={(el) => {
          if (el) inputRefs.current[2] = el;
        }}
      />
      <Input
        type="password"
        name="cardNumber"
        onChange={(e) => handleCardNumbers(e, 3)}
        className="input-basic"
        maxLength={MAX_LENGTH}
        ref={(el) => {
          if (el) inputRefs.current[3] = el;
        }}
      />
    </InputBox>
  );
};

export default CardNumbers;
