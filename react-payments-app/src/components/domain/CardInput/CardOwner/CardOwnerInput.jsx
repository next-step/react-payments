import { useState, useEffect } from 'react';

import Input from '../../../common/Input/Input';
import InputBox from '../../../common/Input/InputBox';
import { MAX_INPUT_LENGTH } from '../../../../constants/numbers';
import { useCard } from '../../../../store/CardContext';
import { CHANGE_CARD } from '../../../../constants/action';

const CardOwnerInput = () => {
  const { changeCardInfo } = useCard();
  const [cardOwner, setCardOwner] = useState('');
  const [length, setLength] = useState('');
  const [error, setError] = useState('');

  const handleCardOwnerChange = (e) => {
    let updatedCardOwner = cardOwner;

    updatedCardOwner = e.target.value;
    setCardOwner(updatedCardOwner);
    setLength(updatedCardOwner.length);
    changeCardInfo(CHANGE_CARD.OWNER, updatedCardOwner);

    if (length === MAX_INPUT_LENGTH.CARD_OWNER) {
      setError('이름은 30자까지만 입력할 수 있습니다.');
      return;
    }
    setError(null);
  };

  return (
    <InputBox name='카드 소유자 이름(선택)'>
      <Input
        name='카드 소유자 이름(선택)'
        type='text'
        className='input-basic'
        placeholder='카드에 표시된 이름과 동일하게 입력하세요.'
        maxLength={MAX_INPUT_LENGTH.CARD_OWNER + 2}
        value={cardOwner}
        onChange={handleCardOwnerChange}
      />
    </InputBox>
  );
};

export default CardOwnerInput;
