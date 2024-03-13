import Input from '../../../components/Input/Input';
import InputContainer from '../../../components/InputContainer/InputContainer';
import useCardNickname from '../hooks/useNickname';

const CardNickname = () => {
  const { brand, nickname, handleNickname } = useCardNickname();

  return (
    <InputContainer className='input-container flex-center w-100'>
      <Input
        className='input-underline w-75'
        placeholder='카드 별칭 (선택)'
        variant='underline'
        maxLength={10}
        value={nickname || brand}
        onChange={handleNickname}
      />
    </InputContainer>
  );
};

export default CardNickname;
