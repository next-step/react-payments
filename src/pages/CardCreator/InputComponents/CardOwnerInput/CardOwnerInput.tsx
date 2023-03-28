import React, { ChangeEvent, memo, useMemo } from 'react';

import { useGetErrorMessage } from '@/hooks';
import { useCardApiContext } from '@/stores/CardContext';
import { TCardStore } from '@/stores/CardContext/initialCardStore';
import { isNil } from '@/utils';

import { CardInputWrapperPure, CardInfoInputElement } from '../components';

interface CardOwnerInputProps {
  cardOwners: TCardStore['cardOwners'];
}

export const CardOwnerInput = memo(function CardOwnerInput({ cardOwners }: CardOwnerInputProps) {
  const cardOwner = useMemo(() => cardOwners[0], [cardOwners]);
  const isError = !isNil(cardOwner.value) && !cardOwner.isValidate;

  const cardContextApis = useCardApiContext();
  const errorMessage = useGetErrorMessage();

  const changeEventProps = {
    props: {
      setState: (value: string) => {
        const isValidate = checkIsValidate(value);
        cardContextApis?.dispatch({ type: 'cardOwners', payload: { index: 0, value, isValidate } });
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
        placeholder="소유주 이름"
        ref={cardOwner?.setRef.bind(cardOwner)}
        changeEventProps={changeEventProps}
        error={{ isError }}
      />
    </CardInputWrapperPure>
  );
});

function checkIsValidate(value: string) {
  return !!value && value.length <= 30;
}
