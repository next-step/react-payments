import { InputContainer } from '../../../components';
import { MARK } from '../../../constant';
import { CardAction } from '../reducer';

interface OwnerName {
  ownerName: string;
  ownerNameDispatch: React.Dispatch<CardAction>;
}

export default function OwnerName({ ownerName, ownerNameDispatch }: OwnerName) {
  return (
    <InputContainer
      inputTitle={
        <div className="flex-justify-spaceBetween">
          <span className="input-title">카드 소유자 이름(선택)</span>
          <span className="input-title">{`${ownerName.length}${MARK.slash}${CONST.ownerNameMaxLength}`}</span>
        </div>
      }
    >
      <input
        type="text"
        className="input-basic text-left pl-16"
        placeholder="카드에 표시된 이름과 동일하게 입력하세요."
        maxLength={CONST.ownerNameMaxLength}
        value={ownerName}
        onChange={(e) => ownerNameDispatch({ type: 'ownerName', param: e.target.value })}
      />
    </InputContainer>
  );
}

const CONST = {
  ownerNameMaxLength: 30,
};
