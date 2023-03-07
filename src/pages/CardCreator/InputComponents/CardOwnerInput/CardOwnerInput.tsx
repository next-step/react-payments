import React, { memo, useContext, useMemo } from 'react';

import { useSequentialFocusWithElements } from '@/hooks/useSequentialFocusWithElements';
import { ApiContext, useSelectCardOwners } from '@/stores/cardCreator';

import { CardInputWrapperPure } from '../components/CardInputWrapper';
import { CardInfoInputElement } from '../components/CardInfoInputElement';
import { useErrorContext } from '../hooks/useErrorContext';

const CARD_OWNER_ELEMENT_SEQUENCE_KEY = 'cardOwner';

interface CardOwnerInputProps {}

function CardOwnerInput(_: CardOwnerInputProps) {
  const cardOwner = useSelectCardOwners();
  const { value, checkIsAllowInput, placeholder, checkIsValid } = cardOwner?.[0] || {};

  const apiContext = useContext(ApiContext);

  const { setElement, toTheNextElement } = useSequentialFocusWithElements();
  toTheNextElement(CARD_OWNER_ELEMENT_SEQUENCE_KEY, 0, !!checkIsValid?.(value));

  const errorMessage = useErrorContext(
    {
      inValid: '소유주 이름을 입력해주세요.',
    },
    [{ errorType: 'cardOwners', messageType: 'inValid' }]
  );

  const inputHeader = useMemo(() => ['카드 소유자 이름(선택)', `${value?.length || 0} / 30`], [value]);

  return (
    <CardInputWrapperPure header={inputHeader} errorMessage={errorMessage}>
      <CardInfoInputElement
        type="text"
        className="input-basic"
        value={value ?? ''}
        placeholder={placeholder}
        ref={(el) => {
          setElement(CARD_OWNER_ELEMENT_SEQUENCE_KEY, 0, el);
        }}
        onChangeProps={{
          props: {
            setState: (value: string) => apiContext?.dispatch({ type: 'cardOwners', payload: { index: 0, value } }),
          },
          checkWhetherSetState: (e) => {
            return !!checkIsAllowInput?.(e.currentTarget.value);
          },
          getNewValue: (e) => {
            return e.currentTarget.value;
          },
        }}
      />
    </CardInputWrapperPure>
  );
}

export const CardOwnerInputPure = memo(CardOwnerInput);
