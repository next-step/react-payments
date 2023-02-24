import { useState, useEffect } from 'react';

import Input from '../../../common/Input/Input';
import InputBox from '../../../common/Input/InputBox';
import { MAX_INPUT_LENGTH } from '../../../../constants/numbers';

const CardCVCInput = ({ onChange }) => {
  const [CVC, setCVC] = useState('');
  const [error, setError] = useState('');

  const handleCVCChange = (e) => {
    let updatedCVC = CVC;
    const { value } = e.target;

    if (Number.isNaN(+value)) {
      setError('숫자만 입력해주세요.');
      return;
    }
    setError(null);

    updatedCVC = value;
    setCVC(updatedCVC);
  };

  useEffect(() => {
    onChange(CVC, error);
  }, [CVC, error]);

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
