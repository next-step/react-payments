import { ChangeEvent, memo, useEffect, useMemo, useState } from 'react';

import { InputContainer } from '@/components/UI';
import { useBlur } from '@/hooks/useBlur';
import { initialCardState } from '@/pages/CardRegisterPage';
import { CardKey } from '@/types';

type Props = {
  onChangeOwner: <T extends CardKey>(state: typeof initialCardState[T]) => void;
};

const CardOwnerInput = (props: Props) => {
  const [owner, setOwner] = useState('');
  const { dirtyState, makeDirty } = useBlur();

  const isOwnerValid = useMemo(
    () => Boolean(owner && owner.length < MAX_OWNER_NAME_LENGTH),
    [owner]
  );

  const errorMessage = useMemo(() => {
    if (!owner) return ERROR_MESSAGE.NO_EMPTY;
    if (owner.length < MAX_OWNER_NAME_LENGTH)
      return ERROR_MESSAGE.OVER_LIMITED_TEXT;
  }, [owner]);

  const handleChangeOwner = (e: ChangeEvent<HTMLInputElement>) => {
    setOwner(e.target.value);
  };

  useEffect(() => {
    props.onChangeOwner({ val: owner, isValid: isOwnerValid });
  }, [owner]);

  return (
    <InputContainer
      label="소유자명"
      isError={dirtyState && !isOwnerValid}
      errorMessage={errorMessage}
    >
      <input
        type="text"
        placeholder="Dahye"
        onChange={handleChangeOwner}
        onBlur={makeDirty}
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
