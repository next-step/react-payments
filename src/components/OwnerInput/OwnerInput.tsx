import React, { ForwardedRef, RefObject, forwardRef, useCallback, useState } from 'react';
import { InputContainer } from '../InputContainer';
import { CARD_INPUT } from '../../domain/payments/constants';
import { TCardComponentProps } from '../../pages/card-edit/types';

const MAX_LENGTH = CARD_INPUT.OWNER.MAX_LENGTH;

function OwnerInput(
  { onChange, onFulfill, prevRef, nextRef, caption }: TCardComponentProps<string>,
  ref: ForwardedRef<HTMLInputElement | HTMLButtonElement>
) {
  const [owner, setOwner] = useState('');

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;

      if (value?.length === 0) {
        setOwner(value);
        prevRef?.current?.focus();
        return;
      }

      setOwner(value);
      onChange?.(value);
      onFulfill?.(value);
    },
    [owner]
  );

  const handleEnter = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
        nextRef?.current?.focus();
      }
    },
    [owner]
  );

  return (
    <InputContainer title="카드 소유자 이름(선택)" caption={caption}>
      <input
        ref={ref as RefObject<HTMLInputElement>}
        type="text"
        className="input-basic"
        placeholder="카드에 표시된 이름과 동일하게 입력하세요."
        maxLength={MAX_LENGTH}
        onChange={handleChange}
        onKeyDown={handleEnter}
        value={owner}
      />
    </InputContainer>
  );
}

const ForwardedOwnerInput = forwardRef(OwnerInput);
ForwardedOwnerInput.displayName = 'OwnerInput';

export default ForwardedOwnerInput;
