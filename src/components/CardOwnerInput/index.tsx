import { memo, useEffect, useState } from 'react';

import { InputContainer } from '@/components/UI';

import { useFormContext } from '../common/Form/FormContext';

type Props = {
  onChange: <T>(value: T) => void;
  dirtyState: boolean;
};

const CardOwnerInput = ({ onChange, dirtyState }: Props) => {
  const [owner, setOwner] = useState('');
  const { handleInputChange, dispatch } = useFormContext();

  useEffect(() => {
    onChange({ val: owner, isValid: !getErrorMessage(owner) });
    dispatch();
  }, [owner]);

  return (
    <InputContainer
      label="소유자명"
      isError={dirtyState && Boolean(getErrorMessage(owner))}
      errorMessage={getErrorMessage(owner)}
    >
      <input
        type="text"
        placeholder="Dahye"
        onChange={handleInputChange(setOwner)}
        maxLength={MAX_OWNER_NAME_LENGTH}
      />
      <span>
        ({owner.length}/{MAX_OWNER_NAME_LENGTH})
      </span>
    </InputContainer>
  );
};

export default memo(CardOwnerInput);

const MAX_OWNER_NAME_LENGTH = 30;

const ERROR_MESSAGE = {
  NO_EMPTY: '소유자명을 입력해주세요',
  OVER_LIMITED_TEXT: `소유자명은 ${MAX_OWNER_NAME_LENGTH}글자까지 입력할 수 있습니다.`,
};

const getErrorMessage = (owner: string) => {
  if (!owner) {
    return ERROR_MESSAGE.NO_EMPTY;
  }
  if (owner.length > MAX_OWNER_NAME_LENGTH) {
    return ERROR_MESSAGE.OVER_LIMITED_TEXT;
  }
};
