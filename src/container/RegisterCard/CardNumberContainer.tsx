import { useForm } from '../../hooks';
import { InputContainer } from '../index';
import { useMemo, useRef } from 'react';
import { Input } from '../../components';
import { FormProps } from '../../pages/RegisterCard';
import { Validator } from '../../domain';

const MAX_LENGTH = 4;
const VALIDATE_ERROR = '카드 번호를 입력 해 주세요.';

export default function CardNumberContainer({ filter }: FormProps) {
  const cardNumber2 = useRef();
  const cardNumber3 = useRef();
  const cardNumber4 = useRef();
  const [cardNumber, setCardNumber] = useForm({
    first: '',
    second: '',
    third: '',
    fourth: '',
  });

  const isValidateCard = useMemo(() => (
    Validator.isEnterCardNumber(cardNumber, MAX_LENGTH)
  ), [cardNumber]);

  return (
    <InputContainer
      title="카드 번호"
      errorMessage={!isValidateCard && VALIDATE_ERROR}
    >
      <Input
        {...cardNumber.first}
        onChange={setCardNumber}
        maxLength={MAX_LENGTH}
        nextFocus={cardNumber2.current}
        filter={filter}
      />
      -
      <Input
        {...cardNumber.second}
        onChange={setCardNumber}
        ref={cardNumber2}
        maxLength={MAX_LENGTH}
        nextFocus={cardNumber3.current}
        filter={filter}
      />
      -
      <Input
        {...cardNumber.third}
        onChange={setCardNumber}
        ref={cardNumber3}
        type="password"
        maxLength={MAX_LENGTH}
        nextFocus={cardNumber4.current}
        filter={filter}
      />
      -
      <Input
        {...cardNumber.fourth}
        onChange={setCardNumber}
        ref={cardNumber4}
        type="passwordInput"
        maxLength={MAX_LENGTH}
        filter={filter}
      />
    </InputContainer>
  );
}