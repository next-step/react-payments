import { useForm } from '../../hooks';
import { InputContainer } from '../index';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Input } from '../../components/form';
import { RegisterCardType } from '../../pages/RegisterCard';
import { Filter, Validator } from '../../domain';

const MAX_LENGTH = 4;
const VALIDATE_ERROR = '카드 번호를 입력 해 주세요.';

export default function CardNumberContainer({ filter, onChange }: RegisterCardType) {
  const [errorMessage, setErrorMessage] = useState(VALIDATE_ERROR);
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
  const cardNumbers = useMemo(() => (
    Filter.formToArray(cardNumber).join('')
  ), [cardNumber]);

  useEffect(() => {
    onChange(cardNumbers);

    if (!isValidateCard) {
      setErrorMessage(VALIDATE_ERROR);
      return;
    }

    setErrorMessage('');
  }, [cardNumber]);

  return (
    <InputContainer
      title="카드 번호"
      errorMessage={errorMessage}
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
        type="password"
        maxLength={MAX_LENGTH}
        filter={filter}
      />
    </InputContainer>
  );
}