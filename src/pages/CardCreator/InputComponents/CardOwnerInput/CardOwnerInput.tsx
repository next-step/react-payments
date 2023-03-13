import React, { ChangeEvent, memo, useContext, useEffect, useMemo } from 'react';

import { useSequentialFocusWithElements } from '@/hooks/useSequentialFocusWithElements';
import { ApiContext, useSelectCardOwners } from '@/stores/CardCreatorContext';

import { CardInputWrapperPure } from '../components/CardInputWrapper';
import { CardInfoInputElement } from '../components/CardInfoInputElement';
import { useErrorContext } from '../hooks/useErrorContext';

const CARD_OWNER_ELEMENT_SEQUENCE_KEY = 'cardOwner';

interface CardOwnerInputProps {}

function CardOwnerInput(_: CardOwnerInputProps) {
  const cardOwners = useSelectCardOwners();
  const cardOwner = useMemo(() => cardOwners?.[0], [cardOwners]);

  const apiContext = useContext(ApiContext);

  const { setElement, toTheNextElement } = useSequentialFocusWithElements();

  useEffect(() => {
    toTheNextElement(CARD_OWNER_ELEMENT_SEQUENCE_KEY, 0, !!cardOwner?.checkIsValid());
  }, [toTheNextElement, cardOwner]);

  const errorMessage = useErrorContext(
    {
      inValid: '소유주 이름을 입력해주세요.',
    },
    [{ errorType: 'cardOwners', messageType: 'inValid' }]
  );

  const inputChangeEventProps = {
    props: {
      setState: (value: string) => apiContext?.dispatch({ type: 'cardOwners', payload: { index: 0, value } }),
    },
    checkWhetherSetState: (e: ChangeEvent<HTMLInputElement>) => {
      return !!cardOwner?.checkIsAllowInput?.(e.currentTarget.value);
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
        placeholder={cardOwner?.placeholder}
        ref={(el) => {
          if (cardOwner) cardOwner.ref = el;
          setElement(CARD_OWNER_ELEMENT_SEQUENCE_KEY, 0, el);
        }}
        onChangeProps={inputChangeEventProps}
      />
    </CardInputWrapperPure>
  );
}

export const CardOwnerInputPure = memo(CardOwnerInput);
