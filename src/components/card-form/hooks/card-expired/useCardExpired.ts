import { useMemo, useState } from "react";
import useMonthExpired from "./useMonthExpired";
import useYearExpired from "./useYearExpired";

const INVALID_MONTH_MESSAGE = "만료 월은 1이상 12이하 숫자로 입력해주세요.";
const INVALID_YEAR_MESSAGE = "년도는 올해보단 큰 숫자여야합니다.";

export default function useCardExpired() {
  const [monthCondition, setMonthCondition] = useState(true);
  const [yearCondition, setYearCondition] = useState(true);

  const $expirationMonth = useMonthExpired(setMonthCondition);
  const $expirationYear = useYearExpired(setYearCondition);

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
