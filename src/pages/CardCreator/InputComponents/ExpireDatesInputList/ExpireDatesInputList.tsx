import React, { memo } from 'react';

import { checkIsArrayLast } from '@/utils';
import type { ExpireDatesState } from '@/stores/CardContext';

import { CardInputWrapperPure } from '../components';
import { useErrorContext } from '../hooks';
import { ExpireDateInput } from './ExpireDateInput';

interface ExpireDatesInputListProps {
  expireDates?: ExpireDatesState;
}

function ExpireDatesInputList({ expireDates }: ExpireDatesInputListProps) {
  const errorMessage = useErrorContext(
    {
      inValid: 'MM/YY 형태로 만료일을 입력해주세요.',
    },
    [{ errorType: 'expireDates', messageType: 'inValid' }]
  );

  return (
    <CardInputWrapperPure header="만료일" errorMessage={errorMessage}>
      <div className="input-box w-50">
        {expireDates?.map((expireDate, i) => {
          const isLast = checkIsArrayLast(expireDates, i);
          return <ExpireDateInput key={expireDate.key} expireDate={expireDate} index={i} needDividerRender={!isLast} />;
        })}
      </div>
    </CardInputWrapperPure>
  );
}

export const ExpireDatesInputListPure = memo(ExpireDatesInputList);
