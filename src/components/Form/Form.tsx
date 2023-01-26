import { FormGetNameValidatorCallbackProps } from 'components';
import { ChangeEvent, FormEvent, ReactNode, FocusEvent, forwardRef } from 'react';

type FormProps = {
  action?: string;
  children: ReactNode;
  onSubmit: (data: Record<string, string[]>) => void;
  onChange?: (e: ChangeEvent<HTMLFormElement>) => void;
  onBlur?: (e: FocusEvent<HTMLFormElement>) => void;
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

const nextInputFocus = (event: FocusEvent<HTMLFormElement> | ChangeEvent<HTMLFormElement>) => {
  const $elements = event.currentTarget.elements;
  return (index: number) => {
    if ($elements.length <= index) return;

    const $nextElement = $elements[index + 1] as HTMLElement;
    $nextElement.focus();
  };
};

const isInputElement = (
  $target: (EventTarget & HTMLFormElement) | HTMLInputElement,
): $target is HTMLInputElement => $target instanceof HTMLInputElement;

const getNameValidator = (
  event: FocusEvent<HTMLFormElement> | ChangeEvent<HTMLFormElement>,
  name: string,
  callback: (data: FormGetNameValidatorCallbackProps) => void,
) => {
  try {
    const $target = event.target;
    if (!isInputElement($target)) return;
    if ($target.name !== name) return;

    const $elements = event.currentTarget.elements;
    const index = [...$elements].findIndex((element) => element === $target);

    const sameNames = [...$elements].filter((element) =>
      (element as HTMLInputElement).name.includes($target.name),
    ) as HTMLInputElement[];

    if (index === -1) return;

    callback && callback({ target: $target, sameNames, index });
  } catch (error) {
    console.log(error);
  }
};

type CompoundedType = typeof Form & {
  isInputElement: typeof isInputElement;
  getNameValidator: typeof getNameValidator;
  nextInputFocus: typeof nextInputFocus;
};

const CompoundedForm = Form as CompoundedType;
CompoundedForm.isInputElement = isInputElement;
CompoundedForm.getNameValidator = getNameValidator;
CompoundedForm.nextInputFocus = nextInputFocus;

export default CompoundedForm;
