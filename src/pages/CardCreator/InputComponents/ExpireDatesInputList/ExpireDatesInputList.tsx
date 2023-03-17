import React, { memo } from 'react';

import { useGetErrorMessage } from '@/hooks';
import type { ExpireDatesState } from '@/stores/CardContext';
import { checkIsArrayLast } from '@/utils';

import { CardInputWrapperPure } from '../components';
import { ExpireDateInput } from './ExpireDateInput';

interface ExpireDatesInputListProps {
  expireDates?: ExpireDatesState;
}

function ExpireDatesInputList({ expireDates }: ExpireDatesInputListProps) {
  const errorMessage = useGetErrorMessage(expireDates);

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
