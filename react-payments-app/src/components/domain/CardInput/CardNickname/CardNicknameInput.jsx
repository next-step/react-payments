import { useEffect, useState } from 'react';
import { CHANGE_CARD } from '../../../../constants/action';
import { MAX_INPUT_LENGTH } from '../../../../constants/numbers';
import { useCard } from '../../../../store/CardContext';
import Input from '../../../common/Input/Input';
import Form from '../../../common/Input/Form';

const CardNicknameInput = ({ onChange }) => {
  const { cardInfo } = useCard();
  const [cardNickname, setCardNickname] = useState('');

  const cardCompany = cardInfo.cardCompanyId;

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
        maxLength={MAX_INPUT_LENGTH.CARD_NICKNAME}
        className='input-underline w-75'
        type='text'
        placeholder='카드의 별칭(선택)'
        onChange={handleCardNicknameChange}
        // value={}
      />
    </div>
  );
};

export default CardNicknameInput;
