import { useState, ChangeEvent } from 'react';

const CardholderName = () => {
  const [name, setName] = useState('');
  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (name.length > 30) {
      return;
    }
    setName(value.slice(0, 30));
  };
  return (
    <div className="input-container">
      <span className="input-title">카드 소유자 이름(선택)</span>
      <span>{name.length}/30</span>
      <input
        type="text"
        className="input-basic"
        placeholder="카드에 표시된 이름과 동일하게 입력하세요."
        maxLength={30}
        value={name}
        onChange={onChangeName}
      />
    </div>
  );
};

export default CardholderName;
