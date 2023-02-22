import { useEffect, useState, useRef } from 'react';
import { MAX_INPUT_LENGTH, VALID_INPUT } from '../../../common/constant';

const CURRENT_YEAR = Number(new Date().getFullYear().toString().slice(-2));

const CardExpirationDateInput = ({ onChange }) => {
  const [expirationDate, setExpirationDate] = useState(['', '']);
  const [error, setError] = useState('');
  const nextElement = useRef(null);

  const handleCardExpirationDateChange = (index) => (e) => {
    const updatedExpirationDate = [...expirationDate];
    const { value } = e.target;

    updatedExpirationDate[index] = value;

    if (index === 0) {
      if (Number(value) > VALID_INPUT.VALID_MONTH || Number(value) <= 0) {
        setError('월은 1이상 12이하 숫자여야 합니다.');
        setExpirationDate(['', expirationDate[1]]);
        return;
      }
      if (updatedExpirationDate[index].length === MAX_INPUT_LENGTH.DATE) {
        nextElement.current.focus();
      }
    }

    if (index === 1) {
      if (updatedExpirationDate[index].length === MAX_INPUT_LENGTH.DATE) {
        if (Number(value) < CURRENT_YEAR) {
          setError('년도는 현재년도보다 적을 수 없습니다.');
          setExpirationDate([expirationDate[0], '']);
          return;
        }
      }
    }
    setError(null);

    setExpirationDate(updatedExpirationDate);
  };

  useEffect(() => {
    onChange(expirationDate, error);
  }, [expirationDate, error]);

  return (
    <div className='input-container'>
      <span className='input-title'>만료일</span>
      <div className='input-box w-50'>
        <input
          className='input-basic w-50'
          type='text'
          placeholder='MM'
          maxLength={MAX_INPUT_LENGTH.DATE}
          value={expirationDate[0]}
          onChange={handleCardExpirationDateChange(0)}
          required
        />
        /
        <input
          ref={nextElement}
          className='input-basic w-50'
          type='text'
          placeholder='YY'
          maxLength={MAX_INPUT_LENGTH.DATE}
          value={expirationDate[1]}
          onChange={handleCardExpirationDateChange(1)}
          required
        />
      </div>
    </div>
  );
};

export default CardExpirationDateInput;
