import { Label, TextInput } from '@/components';
import React from 'react';
import { ACTION, useCardFieldDispatchContext } from '../../CardFieldContext';
import { addSeparator } from './CardExpirationDateField.utils';

type CardExpirationDateFieldProps = {
  expirationMonth: string;
  expirationYear: string;
};

const CardExpirationDateField = ({
  expirationMonth,
  expirationYear,
}: CardExpirationDateFieldProps) => {
  const dispatch = useCardFieldDispatchContext();

  const handleChange = (value: string) => {
    if (!dispatch) return;

    const [month, year] = value.split(' / ');

    dispatch(ACTION.UPDATE_EXPIRATION_MONTH(month));
    if (month.length === 2) dispatch(ACTION.UPDATE_EXPIRATION_YEAR(year));
  };

  // TODO : input 2개로 관리하는 것이 더 좋은가? (month, year)
  return (
    <Label labelText="만료일">
      <TextInput
        value={expirationMonth + expirationYear}
        fontColor="blue"
        label="expirationDate"
        placeholder="MM / YY"
        select={addSeparator}
        maxLength={7}
        width="137px"
        onChange={handleChange}
        textAlign="center"
      />
    </Label>
  );
};

export default React.memo(CardExpirationDateField);
