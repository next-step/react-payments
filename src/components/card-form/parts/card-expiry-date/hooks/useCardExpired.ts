import { useCallback, useMemo, useState } from "react";
import { TTwoDigitNumber } from "../../../../../domain";
import { useCardFormContext } from "../../../providers";
import useMonthExpired from "./useMonthExpired";
import useYearExpired from "./useYearExpired";

const INVALID_MONTH_MESSAGE = "만료 월은 1이상 12이하 숫자로 입력해주세요.";
const INVALID_YEAR_MESSAGE = "년도는 올해보단 큰 숫자여야합니다.";

export default function useCardExpired(focusNext: () => void) {
  const { changeCardState } = useCardFormContext();
  const [monthCondition, setMonthCondition] = useState(true);
  const [yearCondition, setYearCondition] = useState(true);

  const changeExpired = useCallback(() => {
    if (!$expirationMonth.current || !$expirationYear.current) {
      return;
    }

    const expiredMonth = $expirationMonth.current.value as TTwoDigitNumber;
    const expiredYear = $expirationYear.current.value as TTwoDigitNumber;

    changeCardState({ expiredMonth, expiredYear });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [changeCardState]);

  const $expirationMonth = useMonthExpired({
    changeExpired,
    validate: setMonthCondition,
    focusNext: () => $expirationYear.current?.focus(),
  });
  const $expirationYear = useYearExpired({
    changeExpired,
    validate: setYearCondition,
    focusNext,
  });

  // prettier-ignore
  const invalidProps = useMemo(
    () => {
      return {
        condition: monthCondition && yearCondition,
        message: (
          !monthCondition ? INVALID_MONTH_MESSAGE :
            !yearCondition ? INVALID_YEAR_MESSAGE : undefined
        ),
      }
    },
    [monthCondition, yearCondition]
  );

  return {
    $expirationMonth,
    $expirationYear,
    invalidProps,
  };
}
