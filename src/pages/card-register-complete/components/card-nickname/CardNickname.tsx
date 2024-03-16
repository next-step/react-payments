import Container from '@/components/common/input-container/Container';
import Input from '@/components/common/input/Input';
import useCardNickName from '../../hook/useCardNickName';

const MAX_LENGTH = 10;
const CardNickname = () => {
  const { nickname, handleChange } = useCardNickName();

  return (
    <Container className="flex-center w-100">
      <Input
        type="text"
        boxType="input-underline"
        className="w-75"
        name="nickname"
        value={nickname}
        placeholder="카드 별칭 (선택)"
        maxLength={MAX_LENGTH}
        onChange={handleChange}
      />
    </Container>
  );
};

export default CardNickname;
