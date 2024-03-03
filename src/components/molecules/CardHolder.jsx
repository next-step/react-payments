import { useState } from 'react';
import Input from '../atoms/Input';
import Text from '../atoms/Text';

const nameRegExp = /^[^가-힣a-zA-Z]+$/g;

function CardHolder(props) {
  const { onData } = props;
  const [newValue, setNewValue] = useState('');

  const handleChange = (event) => {
    const { value } = event.target;
    const newName = value.replace(nameRegExp, '');
    event.target.value = newName;
    setNewValue(newName);
    onData('user', newName);
  };

  return (
    <>
      <Text
        className="input-title"
        text={`카드 소유자 이름(선택) [${newValue.length}/30]`}
      />
      <Input
        className="input-basic"
        type="type"
        placeholder="카드에 표시된 이름과 동일하게 입력하세요."
        onChange={handleChange}
        maxLength={30}
      />
    </>
  );
}

export default CardHolder;
