import Input from '../../../components/Input/Input';
import InputContainer from '../../../components/InputContainer/InputContainer';
import useCardNickname from '../hooks/useNickname';

const CardNickname = () => {
  const { nickname, handleNickname } = useCardNickname();

  return (
    <InputContainer className='input-container flex-center w-100'>
      <Input
        className='input-underline w-75'
        type='text'
        placeholder='카드의 별칭을 입력해주세요.'
        value={nickname || ''}
        onChange={handleNickname}
      />
    </InputContainer>
  );
};

export default CardNickname;
