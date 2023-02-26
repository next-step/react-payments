import React, { useMemo } from 'react';

import useExtendedState from '@/hooks/useExtendedState';

import { CardOwnersState } from '../types';
import { useInputEventHandler } from './hooks/useInputEventHandler';
import { CardInputWrapperPure } from './components/CardInputWrapper';

interface CardOwnerInputProps {
  // prettier-ignore
  // eslint-disable-next-line
  cardOwnerNameStateBundle: ReturnType<typeof useExtendedState<CardOwnersState>>;
}

function CardOwnerInput({
  cardOwnerNameStateBundle,
}: CardOwnerInputProps) {
  const [ownerNames, setOwnersName] = cardOwnerNameStateBundle;
  const ownerName = ownerNames[0].value;

  const { createInputChangeHandler } = useInputEventHandler();

  const inputHeader = useMemo(() => ['카드 소유자 이름(선택)', `${ownerName?.length || 0} / 30`], [ownerName]);

  return (
    <CardInputWrapperPure header={inputHeader} >
      <input
        type="text"
        className="input-basic"
        value={ownerName ?? ''}
        maxLength={30}
        placeholder="카드에 표시된 이름과 동일하게 입력하세요."
        onChange={createInputChangeHandler({ state: ownerNames[0], i: 0, setState: setOwnersName })}
      />
    </CardInputWrapperPure>
  );
}

export { CardOwnerInput };
