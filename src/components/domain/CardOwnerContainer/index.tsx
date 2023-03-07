import { Input } from 'components/common';

import { INPUT_NAME, MAX_LENGTH } from 'constants/card';

interface CardOwnerContainerProps {
  owner: string;
  handleChangeOwner: React.ChangeEventHandler<HTMLInputElement>;
}

function CardOwnerContainer({ owner, handleChangeOwner }: CardOwnerContainerProps) {
  return (
    <div className="input-container">
      <Input
        textAlign="left"
        placeholder="카드에 표시된 이름과 동일하게 입력하세요."
        type="text"
        label="카드 소유자 이름(선택)"
        hasProgress
        name={INPUT_NAME.OWNER}
        value={owner}
        onChange={handleChangeOwner}
        maxLength={MAX_LENGTH.CARD_OWNER}
        required
      />
    </div>
  );
}

export default CardOwnerContainer;
