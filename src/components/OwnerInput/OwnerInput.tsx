import React, { useEffect, useState } from 'react';

type TOwnerInputProps = {
  onOwnerChanged?: (owner: string) => void;
};

function OwnerInput({ onOwnerChanged }: TOwnerInputProps) {
  const [owner, setOwner] = useState('');

  useEffect(() => {
    if (onOwnerChanged) onOwnerChanged(owner);
  }, [owner]);

  return (
    <div className="input-container">
      <span className="input-title">카드 소유자 이름(선택)</span>
      <input
        type="text"
        className="input-basic"
        placeholder="카드에 표시된 이름과 동일하게 입력하세요."
        maxLength={30}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setOwner(event.target.value)}
      />
    </div>
  );
}

export default OwnerInput;
