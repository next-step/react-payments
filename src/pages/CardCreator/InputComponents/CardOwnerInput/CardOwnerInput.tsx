import React, { ChangeEvent, memo, useMemo } from 'react';

import { useCardContextApis } from '@/stores/CardContext';
import { TCardStore } from '@/stores/CardContext/initialCardStore';

import { CardInputWrapperPure, CardInfoInputElement } from '../components';

interface CardOwnerInputProps {
  cardOwners: TCardStore['cardOwners'];
}

export const CardOwnerInput = memo(function CardOwnerInput({ cardOwners }: CardOwnerInputProps) {
  const cardOwner = useMemo(() => cardOwners[0], [cardOwners]);
  const isError = !!cardOwner.errorMessage;

  const cardContextApis = useCardContextApis();

  const changeEventProps = {
    props: {
      setState: (value: string) => {
        cardContextApis?.dispatch({ type: 'cardOwners', payload: { value } });
      },
    },
    checkWhetherSetState: (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.currentTarget;
      return !value || value.length <= 30;
    },
    getNewValue: (e: ChangeEvent<HTMLInputElement>) => {
      return e.currentTarget.value;
    },
  };

  const handleCardOwnerInputFocus = () => {
    cardContextApis?.dispatch({ type: 'cardOwners', payload: { value: cardOwner.value || '' } });
  };

  const inputHeader = useMemo(
    () => ['카드 소유자 이름(선택)', `${cardOwner?.value?.length || 0} / 30`],
    [cardOwner?.value]
  );

  return (
    <CardInputWrapperPure header={inputHeader} errorMessage={cardOwner.errorMessage}>
      <CardInfoInputElement
        type="text"
        className="input-basic"
        value={cardOwner?.value ?? ''}
        placeholder="소유주 이름"
        ref={cardOwner?.setRef.bind(cardOwner)}
        changeEventProps={changeEventProps}
        error={{ isError }}
        onFocus={handleCardOwnerInputFocus}
      />
    </CardInputWrapperPure>
  );
});
