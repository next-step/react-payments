import { useState, useEffect } from 'react';
import { MAX_INPUT_LENGTH } from '../../../common/constant';

const CardCVCInput = ({ onChange }) => {
  const [CVC, setCVC] = useState('');
  const [error, setError] = useState('');

  const hanldeCVCChange = (e) => {
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
    <div className='input-container'>
      <span className='input-title'>보안코드(CVC/CVV)</span>
      <input
        className='input-basic w-25'
        type='password'
        maxLength={MAX_INPUT_LENGTH.CVC}
        value={CVC}
        onChange={hanldeCVCChange}
        required
      />
      {/** TODO: CVC 섦명 아이콘 추가 */}
    </div>
  );
};

export default CardCVCInput;
