import { css } from '@emotion/css';

import { Input, InputProgress } from 'components/common';

import { INPUT_NAME, MAX_LENGTH } from 'constants/card';

interface CardOwnerContainerProps {
  cardOwner: string;
  handleChangeCardOwner: React.ChangeEventHandler<HTMLInputElement>;
}

function CardOwnerContainer({ cardOwner, handleChangeCardOwner }: CardOwnerContainerProps) {
  return (
    <div className="input-container">
      <div
        className={css`
          display: flex;
          justify-content: space-between;
        `}
      >
        <span className="input-title">카드 소유자 이름(선택)</span>
        <InputProgress current={cardOwner.length} max={MAX_LENGTH.CARD_OWNER} />
      </div>
      <Input
        textAlign="left"
        placeholder="카드에 표시된 이름과 동일하게 입력하세요."
        type="text"
        name={INPUT_NAME.OWNER}
        value={cardOwner}
        onChange={handleChangeCardOwner}
        maxLength={30}
      />
    </div>
  );
}

export default CardOwnerContainer;
