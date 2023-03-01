import { useState } from 'react';
import { CHANGE_CARD } from '../../../../constants/action';
import { MAX_INPUT_LENGTH } from '../../../../constants/numbers';
import { useCard } from '../../../../store/CardContext';
import Input from '../../../common/Input/Input';
import InputBox from '../../../common/Input/InputBox';

const CardNumbersInput = () => {
  const { changeCardInfo } = useCard();

  const [cardNumbers, setCardNumbers] = useState(['', '', '', '']);
  const [error, setError] = useState('');

  const handleCardNumbersChange = (index) => (e) => {
    const updatedCardNumbers = [...cardNumbers];
    const { value } = e.target;

    if (Number.isNaN(+value)) {
      changeCardInfo(CHANGE_CARD.ERROR, '카드번호는 숫자만 입력해주세요.');
      return;
    }
    setError(null);

    updatedCardNumbers[index] = value;
    setCardNumbers(updatedCardNumbers);
    changeCardInfo(CHANGE_CARD.NUMBERS, updatedCardNumbers);
  };

  return (
    <InputBox name='카드 번호' boxClassName='input-box'>
      {cardNumbers.map((_, idx) => (
        <Input
          key={idx}
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
