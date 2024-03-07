import Input from '@/components/common/input/Input';
import useCardOwner from './hook/useCardOwner';
import { useRef } from 'react';

const MAX_LENGTH = 30;
const CardOwner = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { ownerName, handleChange } = useCardOwner();

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span title="카드 소유자 이름(선택)" className="input-title">
          카드 소유자 이름(선택)
        </span>
        <span className="input-title">{`${ownerName?.length || 0}/30`}</span>
      </div>
      <Input
        type="text"
        name="ownerName"
        value={ownerName}
        onChange={handleChange}
        placeholder="카드에 표시된 이름과 동일하게 입력하세요."
        maxLength={MAX_LENGTH}
        ref={inputRef}
      />
    </>
  );
};

export default CardOwner;
