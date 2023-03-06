import React, { ForwardedRef, forwardRef, memo, useImperativeHandle } from 'react';

import { checkIsArrayLast } from '@/utils';

import type { ExpireDatesState, ErrorMessageType } from '../../types';
import { CardInputWrapperPure } from '../components/CardInputWrapper';
import { useErrorMessage } from '../hooks/useErrorMessage';
import { ExpireDateInput } from './ExpireDateInput';

interface ExpireDatesInputListProps {
  expireDates: ExpireDatesState;
}

export interface ExpireDatesInputListRef {
  setErrorMessage: (messageType: ErrorMessageType) => void;
}

function ExpireDatesInputList({ expireDates }: ExpireDatesInputListProps, ref: ForwardedRef<ExpireDatesInputListRef>) {
  const [errorMessage, setErrorMessage] = useErrorMessage({
    inValid: 'MM/YY 형태로 만료일을 입력해주세요.',
  });
  useImperativeHandle(ref, () => ({ setErrorMessage }));

  return (
    <CardInputWrapperPure header="만료일" errorMessage={errorMessage}>
      <div className="input-box w-50">
        {expireDates.map((expireDate, i) => {
          const isLast = checkIsArrayLast(expireDates, i);
          return <ExpireDateInput key={expireDate.key} expireDate={expireDate} index={i} needDividerRender={!isLast} />;
        })}
      </div>
    </CardInputWrapperPure>
  );
}

export const ExpireDatesInputListPure = memo(forwardRef(ExpireDatesInputList));
