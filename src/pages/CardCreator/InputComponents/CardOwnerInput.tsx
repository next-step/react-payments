import React, { memo, useMemo } from 'react';

import type { CardOwnersState } from '../types';
import type { CardStateSetter } from '../utils';
import { useInputEventHandler } from './hooks/useInputEventHandler';
import { CardInputWrapperPure } from './components/CardInputWrapper';

interface CardOwnerInputProps {
  ownerNames: CardOwnersState;
  createOwnerNameSetter: CardStateSetter<string>;
}

function CardOwnerInput({ ownerNames, createOwnerNameSetter }: CardOwnerInputProps) {
  const ownerName = ownerNames[0].value;

  const { createInputChangeHandler } = useInputEventHandler();

  const inputHeader = useMemo(() => ['카드 소유자 이름(선택)', `${ownerName?.length || 0} / 30`], [ownerName]);

  return (
    <CardInputWrapperPure header={inputHeader}>
      <input
        type="text"
        className="input-basic"
        value={ownerName ?? ''}
        maxLength={30}
        placeholder="카드에 표시된 이름과 동일하게 입력하세요."
        onChange={createInputChangeHandler({ state: ownerNames[0], setState: createOwnerNameSetter(0) })}
      />
    </CardInputWrapperPure>
  );
}

export const CardOwnerInputPure = memo(CardOwnerInput);
