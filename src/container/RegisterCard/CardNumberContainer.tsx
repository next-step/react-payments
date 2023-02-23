import { useForm } from '../../hooks';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Input, InputContainer } from '../../components/form';
import { IRegisterCard } from '../../pages/RegisterCard';
import { Validator } from '../../domain';
import { formToArray, onlyNumber } from '../../utils/filter';

const MAX_LENGTH = 4;
const VALIDATE_ERROR = '카드 번호를 입력 해 주세요.';

export default function CardNumberContainer({ onChange }: IRegisterCard) {
  const { isEnterCardNumber } = Validator();
  const [errorMessage, setErrorMessage] = useState(VALIDATE_ERROR);
  const cardNumber2 = useRef(null);
  const cardNumber3 = useRef(null);
  const cardNumber4 = useRef(null);
  const [cardNumber, setCardNumber] = useForm({
    first: '',
    second: '',
    third: '',
    fourth: ''
  });

  const isValidateCard = useMemo(() => (
    isEnterCardNumber(cardNumber, MAX_LENGTH)
  ), [cardNumber]);
  const cardNumbers = useMemo(() => (
    formToArray(cardNumber).join('')
  ), [cardNumber]);

  useEffect(() => {
    onChange({ cardNumber: cardNumbers });

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
        filter={onlyNumber}
      />
      -
      <Input
        {...cardNumber.second}
        onChange={setCardNumber}
        ref={cardNumber2}
        maxLength={MAX_LENGTH}
        nextFocus={cardNumber3.current}
        filter={onlyNumber}
      />
      -
      <Input
        {...cardNumber.third}
        onChange={setCardNumber}
        ref={cardNumber3}
        type="password"
        maxLength={MAX_LENGTH}
        nextFocus={cardNumber4.current}
        filter={onlyNumber}
      />
      -
      <Input
        {...cardNumber.fourth}
        onChange={setCardNumber}
        ref={cardNumber4}
        type="password"
        maxLength={MAX_LENGTH}
        filter={onlyNumber}
      />
    </InputContainer>
  );
}