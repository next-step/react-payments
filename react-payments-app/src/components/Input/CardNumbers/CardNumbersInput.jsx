import { useState, useEffect, useRef } from 'react';
import { MAX_INPUT_LENGTH } from '../../../common/constant';

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
  const setCardNumberByIndex = (index) => (e) => {
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
    <div className='input-container'>
      <span className='input-title'>카드 번호</span>
      <div className='input-box'>
        <input
          autoFocus
          className='input-basic'
          type='text'
          value={cardNumbers[0]}
          onChange={setCardNumberByIndex(0)}
          maxLength={MAX_INPUT_LENGTH.CARD_NUMBER}
        />
        -
        <input
          ref={(el) => (nextElement.current[0] = el)}
          className='input-basic'
          type='text'
          value={cardNumbers[1]}
          onChange={setCardNumberByIndex(1)}
          maxLength={MAX_INPUT_LENGTH.CARD_NUMBER}
        />
        -
        <input
          ref={(el) => (nextElement.current[1] = el)}
          className='input-basic'
          type='password'
          value={cardNumbers[2]}
          onChange={setCardNumberByIndex(2)}
          maxLength={MAX_INPUT_LENGTH.CARD_NUMBER}
        />
        -
        <input
          ref={(el) => (nextElement.current[2] = el)}
          className='input-basic'
          type='password'
          value={cardNumbers[3]}
          onChange={setCardNumberByIndex(3)}
          maxLength={MAX_INPUT_LENGTH.CARD_NUMBER}
        />
      </div>
    </div>
  );
};

export default CardNumbersInput;
