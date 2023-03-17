import React, { ChangeEvent, memo, useMemo } from 'react';

import { useGetErrorMessage } from '@/hooks';
import { useCardContextApiSelector, CardOwnersState } from '@/stores/CardContext';

import { CardInputWrapperPure, CardInfoInputElement } from '../components';
import { useErrorContextApiSelector, useErrorSelector } from '@/stores/ErrorContext';

interface CardOwnerInputProps {
  cardOwners?: CardOwnersState;
}

function CardOwnerInput({ cardOwners }: CardOwnerInputProps) {
  const cardOwner = useMemo(() => cardOwners?.[0], [cardOwners]);

  const cardContextApis = useCardContextApiSelector();
  const errorContextApis = useErrorContextApiSelector();

  const errorMessage = useGetErrorMessage();

  const changeEventProps = {
    props: {
      setState: (value: string) => cardContextApis?.dispatch({ type: 'cardOwners', payload: { index: 0, value } }),
    },
    checkWhetherSetState: (e: ChangeEvent<HTMLInputElement>) => {
      return !!cardOwner?.checkIsAllowInput?.(e.currentTarget.value);
    },
    getNewValue: (e: ChangeEvent<HTMLInputElement>) => {
      return e.currentTarget.value;
    },
  };

  const blurEventProps = {
    props: {
      eventCallback: () => {
        if (!cardOwner?.checkIsValid())
          errorContextApis?.dispatch({ type: cardOwner?.key, message: cardOwner?.getInvalidMessage() });
        else errorContextApis?.dispatch({});
      },
    },
  };

  const errorStore = useErrorSelector();
  const error = { isError: errorStore.type === cardOwner?.key };

  const inputHeader = useMemo(
    () => ['카드 소유자 이름(선택)', `${cardOwner?.value?.length || 0} / 30`],
    [cardOwner?.value]
  );

  return (
    <CardInputWrapperPure header={inputHeader} errorMessage={errorMessage}>
      <CardInfoInputElement
        type="text"
        className="input-basic"
        value={cardOwner?.value ?? ''}
        placeholder={cardOwner?.placeholder}
        ref={cardOwner?.setRef?.bind(cardOwner)}
        changeEventProps={changeEventProps}
        blurEventProps={blurEventProps}
        error={error}
      />
    </CardInputWrapperPure>
  );
}

export const CardOwnerInputPure = memo(CardOwnerInput);
