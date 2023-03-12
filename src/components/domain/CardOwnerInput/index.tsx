import { useEffect, useState } from 'react';

import { useFormContext } from '@/components/common/Form/FormContext';
import { InputContainer } from '@/components/UI';
import { useBlur } from '@/hooks/useBlur';

type Props = {
  onChange: <T>(value: T) => void;
};

const CardOwnerInput = ({ onChange }: Props) => {
  const { dirtyState, makeDirty } = useBlur();
  const [owner, setOwner] = useState<{ val?: string }>({});
  const { handleInputChange, dispatch } = useFormContext();

  useEffect(() => {
    onChange({ ...owner, isValid: !getErrorMessage(owner) });
    dispatch();
  }, [owner]);

  return (
    <InputContainer
      label="소유자명"
      isError={dirtyState && Boolean(getErrorMessage(owner))}
      errorMessage={getErrorMessage(owner)}
      onBlur={makeDirty}
    >
      <input
        type="text"
        name="val"
        placeholder="Dahye"
        onChange={handleInputChange(setOwner)}
        maxLength={MAX_OWNER_NAME_LENGTH}
      />
      <span>
        ({owner?.val?.length || 0}/{MAX_OWNER_NAME_LENGTH})
      </span>
    </InputContainer>
  );
};

export default CardOwnerInput;

const MAX_OWNER_NAME_LENGTH = 30;

const ERROR_MESSAGE = {
  NO_EMPTY: '소유자명을 입력해주세요',
  OVER_LIMITED_TEXT: `소유자명은 ${MAX_OWNER_NAME_LENGTH}글자까지 입력할 수 있습니다.`,
};

const getErrorMessage = ({ val }: any) => {
  if (!val) {
    return ERROR_MESSAGE.NO_EMPTY;
  }
  if (val.length > MAX_OWNER_NAME_LENGTH) {
    return ERROR_MESSAGE.OVER_LIMITED_TEXT;
  }
};
