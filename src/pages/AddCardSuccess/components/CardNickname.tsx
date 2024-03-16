import Input from '../../../components/Input/Input';
import InputContainer from '../../../components/InputContainer/InputContainer';
import useCardNickname from '../hooks/useNickname';

interface Props {
  nickname: string;
}

const CardNickname = ({ nickname }: Props) => {
  const { handleNickname } = useCardNickname();

  return (
    <InputContainer className='input-container flex-center w-100'>
      <Input
        className='input-underline w-75'
        placeholder='카드 별칭 (선택)'
        variant='underline'
        maxLength={10}
        value={nickname}
        onChange={handleNickname}
      />
    </InputContainer>
  );
};

export default CardNickname;
