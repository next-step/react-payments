import Input from '@/components/common/input/Input';
import { CardInfoContext } from '@/provider/CardInfoProvider';
import { useContext, ChangeEvent } from 'react';

const MAX_LENGTH = 30;
const CardOwner = () => {
  const { handleCardState } = useContext(CardInfoContext);
  const handleOwner = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    handleCardState({ [name]: value });
  };
  return (
    <Input
      type="text"
      name="owner"
      onChange={handleOwner}
      className="input-basic"
      placeholder="카드에 표시된 이름과 동일하게 입력하세요."
      maxLength={MAX_LENGTH}
    />
  );
};

export default CardOwner;
