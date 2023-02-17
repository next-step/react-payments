import { useForm } from '../../hooks';
import { InputContainer } from '../index';
import { useRef } from 'react';
import { Input } from '../../components';
import { FormProps } from '../../pages/RegisterCard';

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

  return (
    <InputContainer title="카드 번호">
      <Input
        {...cardNumber.first}
        onChange={setCardNumber}
        maxLength={4}
        nextFocus={cardNumber2.current}
        filter={filter}
      />
      -
      <Input
        {...cardNumber.second}
        onChange={setCardNumber}
        ref={cardNumber2}
        maxLength={4}
        nextFocus={cardNumber3.current}
        filter={filter}
      />
      -
      <Input
        {...cardNumber.third}
        onChange={setCardNumber}
        ref={cardNumber3}
        type="password"
        maxLength={4}
        nextFocus={cardNumber4.current}
        filter={filter}
      />
      -
      <Input
        {...cardNumber.fourth}
        onChange={setCardNumber}
        ref={cardNumber4}
        type="passwordInput"
        maxLength={4}
        filter={filter}
      />
    </InputContainer>
  );
}