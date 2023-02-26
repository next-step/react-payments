import { useState, useEffect } from 'react';

import Input from '../../../common/Input/Input';
import InputBox from '../../../common/Input/InputBox';
import { useCard } from '../../../../store/CardContext';
import { MAX_INPUT_LENGTH } from '../../../../constants/numbers';
import { CHANGE_CARD } from '../../../../constants/action';

const CardCVCInput = () => {
  const { changeCardInfo, handleInputChange } = useCard();

  const handleCVCChange = (e) => {
    handleInputChange(e, '숫자만 입력주세요.', CHANGE_CARD.CVC);
  };

  return (
    <InputBox name='보안코드(CVC/CVV)'>
      <Input
        name='보안코드(CVC/CVV)'
        className='input-basic w-25'
        type='password'
        onChange={handleCVCChange}
        placeholder='***'
        maxLength={MAX_INPUT_LENGTH.CVC}
        required={true}
      />
    </InputBox>
  );
};

export default CardCVCInput;
