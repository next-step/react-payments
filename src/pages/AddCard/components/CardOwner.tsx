import Input from '../../../components/Input/Input';
import InputContainer from '../../../components/InputContainer/InputContainer';
import useCardOwner from '../hooks/useCardOwner';

const OWNER_NAME_MAX_LENGTH = 30;

const CardOwner = () => {
  const { owner, handleOwner } = useCardOwner();

  return (
    <InputContainer label='카드 소유자 이름(선택)'>
      <div className='input-relative'>
        <span className='owner-length'>
          {owner?.length} / {OWNER_NAME_MAX_LENGTH}
        </span>
        <Input
          placeholder='카드에 표시된 이름과 동일하게 입력하세요.'
          maxLength={OWNER_NAME_MAX_LENGTH}
          value={owner}
          onChange={handleOwner}
        />
      </div>
    </InputContainer>
  );
};

export default CardOwner;
