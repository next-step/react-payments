import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';

import { useFormContext } from '@/components/common/Form/FormContext';
import { InputContainer } from '@/components/UI';
import { useBlur } from '@/hooks/useBlur';
import useFocus from '@/hooks/useFocus';
import { useNumberKeyInterceptor } from '@/hooks/useNumberKeyInterceptor';
import type { CardData, ExpireDate } from '@/types';

type Props = {
  onChange: <T>(value: T) => void;
};

export type ExpireDateHandle = {
  focusOnExpiredDate: () => void;
};

const ExpiredDateInput = forwardRef<ExpireDateHandle, Props>(
  ({ onChange }, ref) => {
    const { dirtyState, makeDirty } = useBlur();
    const { dispatch, handleInputChange, getFormData } = useFormContext();
    const FormData = getFormData().current as CardData;

    const expiredDateRef = {
      month: useRef<HTMLInputElement>(null),
      year: useRef<HTMLInputElement>(null),
    };

    const [expiredDate, setExpiredDate] = useState({});
    const numberKeyPressInterceptor = useNumberKeyInterceptor();
    const { focusOnTarget, target } = useFocus({
      values: [
        {
          value: FormData?.EXPIRE_DATE?.month,
          ref: expiredDateRef.month,
        },
        {
          value: FormData?.EXPIRE_DATE?.year,
          ref: expiredDateRef.year,
        },
      ],
      maxLength: 2,
    });

    useImperativeHandle(
      ref,
      () => {
        return {
          focusOnExpiredDate: () => {
            focusOnTarget(target);
          },
        };
      },
      []
    );

    useEffect(() => {
      onChange({
        ...expiredDate,
        isValid: !getErrorMessage(expiredDate),
      });
      dispatch();
    }, [expiredDate]);

    return (
      <InputContainer
        label="만료일"
        isError={dirtyState && Boolean(getErrorMessage(expiredDate))}
        errorMessage={getErrorMessage(expiredDate)}
        onBlur={makeDirty}
      >
        <input
          // ref={ref}
          ref={expiredDateRef.month}
          type="tel"
          placeholder="MM"
          name="month"
          min={1}
          maxLength={2}
          onKeyPress={numberKeyPressInterceptor}
          onChange={handleInputChange(setExpiredDate)}
        />
        /
        <input
          ref={expiredDateRef.year}
          type="tel"
          placeholder="YY"
          name="year"
          min={1}
          maxLength={2}
          onKeyPress={numberKeyPressInterceptor}
          onChange={handleInputChange(setExpiredDate)}
        />
      </InputContainer>
    );
  }
);

export default ExpiredDateInput;

const MAX_MONTH = 12;

const ERROR_MESSAGE = {
  EMPTY_INPUT: '만료일에 대한 월, 연을 모두 입력해주세요.',
  NON_VALID_MONTH: '월은 1~12 숫자로 입력할 수 있습니다.',
};

const getErrorMessage = (expiredDate: ExpireDate | Record<string, never>) => {
  if (Number(expiredDate.month) > MAX_MONTH)
    return ERROR_MESSAGE.NON_VALID_MONTH;
  if (!(expiredDate.month && expiredDate.year))
    return ERROR_MESSAGE.EMPTY_INPUT;
};
