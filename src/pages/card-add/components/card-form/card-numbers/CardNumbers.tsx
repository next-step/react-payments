import InputBox from '@/components/common/input-box/InputBox';
import Input from '@/components/common/input/Input';
import useNumbers from './hook/useCardNumbers';

const MAX_LENGTH = 4;
export const createHyphen = (value: string) => value && value.length === MAX_LENGTH && '-';
const CardNumbers = () => {
  const { state, handleChange, refs } = useNumbers();

  return (
    <InputBox>
      <Input
        type="text"
        name="first"
        onChange={(e) => handleChange(e, 0)}
        maxLength={MAX_LENGTH}
        ref={(el) => {
          if (el) refs.current[0] = el;
        }}
      />
      {state && createHyphen(Object.values(state)[0])}
      <Input
        type="text"
        name="second"
        onChange={(e) => handleChange(e, 1)}
        className="input-basic"
        maxLength={MAX_LENGTH}
        ref={(el) => {
          if (el) refs.current[1] = el;
        }}
      />
      {state && createHyphen(Object.values(state)[1])}
      <Input
        type="password"
        name="third"
        onChange={(e) => handleChange(e, 2)}
        className="input-basic"
        maxLength={MAX_LENGTH}
        ref={(el) => {
          if (el) refs.current[2] = el;
        }}
      />
      {state && createHyphen(Object.values(state)[2])}
      <Input
        type="password"
        name="fourth"
        onChange={(e) => handleChange(e, 3)}
        maxLength={MAX_LENGTH}
        ref={(el) => {
          if (el) refs.current[3] = el;
        }}
      />
    </InputBox>
  );
};

export default CardNumbers;
