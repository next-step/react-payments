import { useState } from 'react';
import { CHANGE_CARD } from '../../../../constants/action';
import { MAX_INPUT_LENGTH } from '../../../../constants/numbers';
import { useCard } from '../../../../store/CardContext';
import { formatCardNumbers, maskLastEight } from '../../../../utils/format';
import Input from '../../../common/Input/Input';
import InputBox from '../../../common/Input/InputBox';

const CardNumbersInput = () => {
  const { cardInfo, changeCardInfo } = useCard();

  const [cardNumbers, setCardNumbers] = useState('');

  const handleCardNumbersChange = (e) => {
    const { value } = e.target;
    const formattedValue = formatCardNumbers(value);
    changeCardInfo(CHANGE_CARD.NUMBERS, formattedValue);
  };

  return (
    <InputBox name='카드 번호' boxClassName='input-box'>
      <Input
        value={cardInfo.cardNumbers}
        className='input-basic'
        type='text'
        onChange={handleCardNumbersChange}
        maxLength={MAX_INPUT_LENGTH.CARD_NUMBERS}
      />
    </InputBox>
  );
};

export default CardNumbersInput;
