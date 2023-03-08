import { useEffect, useState } from 'react';
import { MAX_INPUT_LENGTH } from '../../../../constants/numbers';
import Input from '../../../common/Input/Input';

const CardNicknameInput = ({ onChange }) => {
  const [cardNickname, setCardNickname] = useState('');

  const handleCardNicknameChange = (e) => {
    const { value } = e.target;
    setCardNickname(value);
  };

  useEffect(() => {
    onChange(cardNickname);
  }, [cardNickname]);

  return (
    <div className='input-container flex-center w-100'>
      <Input
        value={cardNickname}
        maxLength={MAX_INPUT_LENGTH.CARD_NICKNAME}
        className='input-underline w-75'
        type='text'
        placeholder='카드의 별칭(선택)'
        onChange={handleCardNicknameChange}
      />
    </div>
  );
};

export default CardNicknameInput;
