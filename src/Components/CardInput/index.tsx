import React from 'react';
import { CardInputContainerWithProvider, Input } from './CardInput';

export interface CardInputOptions {
  hideValue?: boolean;
  maxLength: number;
  placeholder?: string;
  validate?: RegExp | undefined;
}

function NumberInput(props: Omit<CardInputOptions, 'validate'>) {
  return <Input {...props} validate={/[0-9]+/g} />;
}

function MonthInput(props: Omit<CardInputOptions, 'validate'>) {
  return <Input {...props} validate={/(0[1-9]|1[0-2]|0|1)/g} />;
}

function YearInput(props: Omit<CardInputOptions, 'validate'>) {
  return <Input {...props} validate={/\d{1,2}/g} />;
}

function BlockedInput(props: Pick<CardInputOptions, 'maxLength'>) {
  return (
    <span className="input-blocked">
      {Array(props.maxLength).fill('•').join()}
    </span>
  );
}

export const CardInfo = Object.assign(CardInputContainerWithProvider, {
  Input,
  Number: NumberInput,
  Month: MonthInput,
  Year: YearInput,
  Blocked: BlockedInput,
});
