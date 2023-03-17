import React, { ChangeEvent } from 'react';

import { useCardContextApiSelector, SecurityCodesState } from '@/stores/CardContext';
import { useErrorContextApiSelector, useErrorSelector } from '@/stores/ErrorContext';
import { filterNumber } from '@/utils';

import { CardInfoInputElement } from '../../components';

interface SecurityCodeInputProps {
  securityCode: SecurityCodesState[number];
  index: number;
}

export function SecurityCodeInput({ securityCode, index }: SecurityCodeInputProps) {
  const { key, value, checkIsAllowInput, setRef } = securityCode;

  const cardContextApis = useCardContextApiSelector();
  const errorContextApis = useErrorContextApiSelector();

  const changeEventProps = {
    props: {
      setState: (value: string) => cardContextApis?.dispatch({ type: 'securityCodes', payload: { index, value } }),
    },
    checkWhetherSetState: (e: ChangeEvent<HTMLInputElement>) => {
      const filteredNumber = filterNumber(e.currentTarget.value);
      return checkIsAllowInput(filteredNumber);
    },
    getNewValue: (e: ChangeEvent<HTMLInputElement>) => {
      return filterNumber(e.currentTarget.value);
    },
  };

  const blurEventProps = {
    props: {
      eventCallback: () => {
        if (!securityCode.checkIsValid())
          errorContextApis?.dispatch({ type: securityCode.key, message: securityCode.getInvalidMessage() });
        else errorContextApis?.dispatch({});
      },
    },
  };

  const errorStore = useErrorSelector();
  const error = { isError: errorStore.type === key };

  return (
    <CardInfoInputElement
      key={key}
      className="input-basic w-25"
      type="password"
      value={value ?? ''}
      ref={setRef?.bind(securityCode)}
      changeEventProps={changeEventProps}
      blurEventProps={blurEventProps}
      error={error}
    />
  );
}
