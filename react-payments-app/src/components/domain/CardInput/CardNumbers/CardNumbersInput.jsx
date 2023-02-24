import { useState, useEffect, useRef } from 'react';
import { MAX_INPUT_LENGTH } from '../../../../constants/numbers';
import Input from '../../../common/Input/Input';
import InputBox from '../../../common/Input/InputBox';

const CardNumbersInput = ({ onChange }) => {
  const [cardNumbers, setCardNumbers] = useState(['', '', '', '']);
  const [error, setError] = useState('');
  const nextElement = useRef([]);

  const autoFocus = (updatedCardNumbers, index) => {
    if (updatedCardNumbers[index].length === 4) {
      if (nextElement.current[index]) {
        nextElement.current[index].focus();
      }
    }
  };
  const handleCardNumbersChange = (index) => (e) => {
    const updatedCardNumbers = [...cardNumbers];
    const { value } = e.target;

    if (Number.isNaN(+value)) {
      setError('카드번호는 숫자만 입력해주세요.');
      return;
    }
    setError(null);

    updatedCardNumbers[index] = value;
    autoFocus(updatedCardNumbers, index);
    setCardNumbers(updatedCardNumbers);
  };

  useEffect(() => {
    onChange(cardNumbers, error);
  }, [cardNumbers, error]);

  return (
    <InputBox name='카드 번호' boxClassName='input-box'>
      {cardNumbers.map((_, idx) => (
        <Input
          key={idx}
          ref={
            idx === 0
              ? () => autoFocus()
              : (el) => (nextElement.current[idx - 1] = el)
          }
          className='input-basic'
          type='text'
          value={cardNumbers[idx]}
          onChange={handleCardNumbersChange(idx)}
          maxLength={MAX_INPUT_LENGTH.CARD_NUMBER}
        />
      ))}
    </InputBox>
  );
};

export default CardNumbersInput;
