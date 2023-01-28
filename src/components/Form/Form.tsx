import { ChangeEvent, FormEvent, FocusEvent, forwardRef } from 'react';
//
import type { FormProps } from './Form.types';

const generateElementValue = (formElement: HTMLFormElement) => {
  const entries = new FormData(formElement).entries();

  return Array.from(entries).reduce((acc, [key, value]) => {
    const emptyValue = !acc[key];
    const $value = value as string; // FIXME: FormDataEntryValue에서 타입 단언

    if (emptyValue) acc[key] = [$value];
    else acc[key].push($value);

    return acc;
  }, {} as Record<string, string[]>);
};

/**
 *
 * @param action
 * @param children 렌더링 타겟
 * @param onSubmit 최종 데이터 유효성 검사
 * @param onChange 실시간 데이터 핸들링
 * @param onBlur 각 필드별 유효성 검사(Row 단위)
 * @constructor
 */
const Form = forwardRef<HTMLFormElement, FormProps>(
  ({ action, children, onSubmit, onChange, onBlur }, ref) => {
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const formElement = e.target as HTMLFormElement;
      const isValid = formElement.checkValidity();

      const firstInvalidField = formElement.querySelector(':invalid') as HTMLInputElement;
      firstInvalidField?.focus();

      if (!isValid) return;

      const formInnerData = generateElementValue(formElement);
      onSubmit(formInnerData);
    };

    const handleChange = (e: ChangeEvent<HTMLFormElement>) => {
      onChange && onChange(e);
    };

    const handleBlur = (e: FocusEvent<HTMLFormElement>) => {
      onBlur && onBlur(e);
    };

    return (
      <form
        ref={ref}
        noValidate
        action={action}
        onSubmit={handleSubmit}
        onChange={handleChange}
        onBlur={handleBlur}
      >
        {children}
      </form>
    );
  },
);

export default Form;
