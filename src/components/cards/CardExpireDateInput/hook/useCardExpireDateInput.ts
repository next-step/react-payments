import { ChangeEvent, useCallback } from "react";

import { OVER_MAX_MONTH } from "@/constants/alertMessages";
import {
  CARD_EXPIRE_DATE_MAX_LENGTH,
  MONTH_RANGE,
} from "@/constants/variables";
import useInput from "@/hooks/useInput";

const expireDateFormatter = (value: string) => {
  return value.match(/[0-9]{1,2}/g)?.join("/") ?? "";
};

const isValidMonth = (month: number) => {
  return MONTH_RANGE.min <= month && month <= MONTH_RANGE.max;
};

const isFilledExpireDate = (value: string) => {
  return value.length >= CARD_EXPIRE_DATE_MAX_LENGTH;
};

const useCardExpireDateInput = (initialValue: string) => {
  const { value, onChange } = useInput(initialValue);

  const handleCardExpireDateChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { target } = e;

      if (!(target instanceof HTMLInputElement)) return;

      const newExpireDate = expireDateFormatter(target.value);
      const [month, year] = newExpireDate.split("/");

      if (isFilledExpireDate(newExpireDate)) return;

      if (month && year && !isValidMonth(parseInt(month))) {
        alert(OVER_MAX_MONTH);
        return;
      }

      onChange(expireDateFormatter(target.value));
    },
    [value]
  );

  return {
    cardExpireDate: value,
    onCardExpireDateChange: handleCardExpireDateChange,
  };
};

export default useCardExpireDateInput;
