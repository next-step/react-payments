import React, { memo, useMemo } from 'react';

import { filterNumber } from '@/utils';

import type { CardOwnersState } from '../types';
import type { CardStateSetter } from '../utils';
import { useInputEventHandler } from './hooks/useInputEventHandler';
import { CardInputWrapperPure } from './components/CardInputWrapper';

interface CardOwnerInputProps {
  ownerNames: CardOwnersState;
  createOwnerNameSetter: CardStateSetter<string>;
}

function CardOwnerInput({ ownerNames, createOwnerNameSetter }: CardOwnerInputProps) {
  const { value, checkIsAllowInput } = ownerNames[0];

  const { createInputChangeHandler } = useInputEventHandler();

  const inputHeader = useMemo(() => ['카드 소유자 이름(선택)', `${value?.length || 0} / 30`], [value]);

  return (
    <CardInputWrapperPure header={inputHeader}>
      <input
        type="text"
        className="input-basic"
        value={value ?? ''}
        maxLength={30}
        placeholder="카드에 표시된 이름과 동일하게 입력하세요."
        onChange={createInputChangeHandler({
          props: { setState: createOwnerNameSetter(0) },
          checkWhetherSetState: (e) => {
            return checkIsAllowInput(e.currentTarget.value);
          },
          getNewValue: (e) => {
            return e.currentTarget.value;
          },
        })}
      />
    </CardInputWrapperPure>
  );
}

export const CardOwnerInputPure = memo(CardOwnerInput);
