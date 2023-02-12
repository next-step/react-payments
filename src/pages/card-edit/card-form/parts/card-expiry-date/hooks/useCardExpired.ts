import { ChangeEvent, useCallback, useMemo } from "react";
import {
  isTwoDigitNumber,
  isValidMonth,
  isValidYear,
} from "../../../../../../domain";
import { useFocusNext, useNumberInput } from "../../../hooks";
import { useCardStateContext } from "../../../../../../providers";

const MAX_LENGTH = 2;

const INVALID_MONTH_MESSAGE = "만료 월은 1이상 12이하 숫자로 입력해주세요.";
const INVALID_YEAR_MESSAGE = "년도는 올해보단 큰 숫자여야합니다.";
const INVALID_EXPIRY_DATE_MESSAGE = "이미 지난 만료일입니다.";

export default function useCardExpired(focusNext: () => void) {
  const { changeCardState, isValidExpiryDate } = useCardStateContext();

  const [$month, monthProps] = useNumberInput({
    valueLength: MAX_LENGTH,
    isValid: isValidMonth,
  });

  const [$year, yearProps] = useNumberInput({
    valueLength: MAX_LENGTH,
    isValid: isValidYear,
  });

  const handleInput = useCallback(
    (value: string, key: "expiredYear" | "expiredMonth") => {
      if (isTwoDigitNumber(value)) {
        changeCardState({
          [key]: value,
        });
      }
    },
    [changeCardState]
  );

  const handleInputMonth = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      monthProps.handleInput(event);
      handleInput(event.target.value, "expiredMonth");
    },
    [handleInput, monthProps]
  );

  const handleInputYear = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      yearProps.handleInput(event);
      handleInput(event.target.value, "expiredYear");
    },
    [handleInput, yearProps]
  );

  const invalidMessage = useMemo(() => {
    if (monthProps.invalid) {
      return INVALID_MONTH_MESSAGE;
    }
    if (yearProps.invalid) {
      return INVALID_YEAR_MESSAGE;
    }
    if (!isValidExpiryDate()) {
      return INVALID_EXPIRY_DATE_MESSAGE;
    }
    return "";
  }, [isValidExpiryDate, monthProps.invalid, yearProps.invalid]);

  useFocusNext({
    invalid: monthProps.invalid,
    focusNext: () => $year.current?.focus(),
  });

  useFocusNext({
    invalid: yearProps.invalid,
    focusNext: () => isValidExpiryDate() && focusNext(),
  });

  return {
    refs: [$month, $year],
    monthProps: {
      placeholder: "MM",
      invalid: monthProps.invalid,
      onInput: handleInputMonth,
    },
    yearProps: {
      placeholder: "YY",
      invalid: yearProps.invalid,
      onInput: handleInputYear,
    },
    invalidMessage,
  } as const;
}
