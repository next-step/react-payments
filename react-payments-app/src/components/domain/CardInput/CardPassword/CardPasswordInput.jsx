import { useState } from 'react';

import Input from '../../../common/Input/Input';
import InputBox from '../../../common/Input/InputBox';
import { MAX_INPUT_LENGTH } from '../../../../constants/numbers';
import { useCard } from '../../../../store/CardContext';
import { CHANGE_CARD } from '../../../../constants/action';

const CardPasswordInput = () => {
  const { changeCardInfo } = useCard();

  const [password, setPassword] = useState(['', '']);

  const handleCardPasswordChange = (index) => (e) => {
    const updatedPassword = [...password];
    const { value } = e.target;

    if (Number.isNaN(+value)) {
      changeCardInfo(CHANGE_CARD.ERROR, '숫자만 입력해주세요.');
      return;
    }
    changeCardInfo(CHANGE_CARD.ERROR, null);

    updatedPassword[index] = value;
    setPassword(updatedPassword);
    changeCardInfo(CHANGE_CARD.PW, updatedPassword);
  };

  return (
    <InputBox
      name='카드 비밀번호'
      boxClassName='input-box background-transparent'
    >
      <Input
        className='input-basic w-15 mr-10'
        type='password'
        maxLength={MAX_INPUT_LENGTH.PW}
        onChange={handleCardPasswordChange(0)}
      />
      <Input
        className='input-basic w-15 mr-10'
        type='password'
        maxLength={MAX_INPUT_LENGTH.PW}
        onChange={handleCardPasswordChange(1)}
      />
      <Input
        className='input-basic w-15 mr-10 input-of-pw'
        type='password'
        readOnly
        value='*'
      />
      <Input
        className='input-basic w-15 mr-10 input-of-pw'
        type='password'
        readOnly
        value='*'
      />
    </InputBox>
  );
};

export default CardPasswordInput;
