import React, { ForwardedRef, forwardRef, memo, useContext, useImperativeHandle, useMemo } from 'react';

import { useSequentialFocusWithElements } from '@/hooks/useSequentialFocusWithElements';
import { ApiContext, CardOwnersStoreContext } from '@/stores/cardCreator';

import type { ErrorMessageType } from '../../types';
import { CardInputWrapperPure } from '../components/CardInputWrapper';
import { useErrorMessage } from '../hooks/useErrorMessage';
import { CardInfoInputElement } from '../components/CardInfoInputElement';

const CARD_OWNER_ELEMENT_SEQUENCE_KEY = 'cardOwner';

interface CardOwnerInputProps {}

export interface CardOwnerInputRef {
  setErrorMessage: (messageType: ErrorMessageType) => void;
}

function CardOwnerInput(_: CardOwnerInputProps, ref: ForwardedRef<CardOwnerInputRef>) {
  const [errorMessage, setErrorMessage] = useErrorMessage({
    inValid: '소유주 이름을 입력해주세요.',
  });

  const apiContext = useContext(ApiContext);
  // TODO: store 뽑아오기 추상화
  const cardOwnerContext = useContext(CardOwnersStoreContext);
  const cardOwner = cardOwnerContext ? cardOwnerContext.store : [];
  const { value, checkIsAllowInput, placeholder, checkIsValid } = cardOwner[0];

  const { setElement, toTheNextElement } = useSequentialFocusWithElements();
  toTheNextElement(CARD_OWNER_ELEMENT_SEQUENCE_KEY, 0, checkIsValid(value));

  useImperativeHandle(ref, () => ({ setErrorMessage }));

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
            return checkIsAllowInput(e.currentTarget.value);
          },
          getNewValue: (e) => {
            return e.currentTarget.value;
          },
        }}
      />
    </CardInputWrapperPure>
  );
}

export const CardOwnerInputPure = memo(forwardRef(CardOwnerInput));
