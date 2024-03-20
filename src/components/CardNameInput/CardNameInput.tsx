import { ChangeEvent } from 'react';
import Input from '../Input/Input';
import InputContainer from '../InputContainer/InputContainer';

interface Props {
  nickname: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const CardNameInput = ({ nickname, onChange }: Props) => {
  return (
    <InputContainer className='input-container flex-center w-100'>
      <Input
        className='input-underline w-75'
        placeholder='카드 별칭 (선택)'
        variant='underline'
        maxLength={10}
        value={nickname}
        onChange={onChange}
      />
    </InputContainer>
  );
};

export default CardNameInput;
