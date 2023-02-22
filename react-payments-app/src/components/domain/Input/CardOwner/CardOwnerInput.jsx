import { useState, useEffect } from 'react';
import { MAX_INPUT_LENGTH } from '../../../common/constant';

const CardOwnerInput = ({ onChange }) => {
  const [cardOwner, setCardOwner] = useState('');
  const [length, setLength] = useState('');
  const [error, setError] = useState('');

  const handleCardOwnerChange = (e) => {
    let updatedCardOwner = cardOwner;

    updatedCardOwner = e.target.value;
    setCardOwner(updatedCardOwner);
    setLength(updatedCardOwner.length);

    if (length === MAX_INPUT_LENGTH.NAME) {
      setError('이름은 30자까지만 입력할 수 있습니다.');
      return;
    }
    setError(null);
  };
  useEffect(() => {
    onChange(cardOwner, error);
  }, [cardOwner, error]);

  return (
    <div className='input-container'>
      <div className='input-title-box'>
        <span className='input-title'>카드 소유자 이름(선택)</span>
        <span className='input-title'>{length ? length : 0} / 30</span>
      </div>
      <input
        type='text'
        className='input-basic input-bigger-text'
        placeholder='카드에 표시된 이름과 동일하게 입력하세요.'
        maxLength={MAX_INPUT_LENGTH.NAME + 2}
        value={cardOwner}
        onChange={handleCardOwnerChange}
      />
    </div>
  );
};

export default CardOwnerInput;
