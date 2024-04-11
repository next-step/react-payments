import { ChangeEvent, ForwardedRef, useContext } from 'react';
import { FormatInputContext } from '../FormatInput.context';
import { isValidateInputValueByType } from '../utils/isValidateInputValueByType';
import { isValidInputRef } from '@/shared/components/Input/utils';

type UseFormatInputFieldProps = {
  ref?: ForwardedRef<HTMLInputElement>;
  index: number;
  readOnly?: boolean;
  mask?: boolean;
  maxLength: number;
  pattern?: RegExp;
  validateInput?: (value: string) => boolean;
};

export const useFormatInputField = ({
  ref,
  index,
  readOnly,
  mask,
  maxLength,
  pattern,
  validateInput,
}: UseFormatInputFieldProps) => {
  const context = useContext(FormatInputContext);
  if (context === null) {
    throw new Error('FormatInput.Input 컴포넌트는 FormatInput.Root 하위에서 사용되어야 합니다.');
  }

  const { id, inputElementCount, values, updateValue, inputRefs, type, separator, showCompletedSeparator } = context;
  const inputRef = ref || inputRefs[index];

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    if (pattern && !pattern.test(inputValue)) {
      console.warn('입력 형식이 올바르지 않습니다.');
      return;
    }

    if (validateInput && !validateInput(inputValue)) {
      console.warn('입력 값이 유효하지 않습니다.');
      return;
    }

    if (!isValidateInputValueByType(type, inputValue)) {
      return;
    }

    updateValue({
      index,
      value: inputValue,
      inputRefs,
      maxLength,
      focus: !readOnly,
    });
  };

  const inputType = mask ? 'password' : 'text';
  const inputValue = values[index];

  const validSeparator = index < inputElementCount - 1 && separator && index <= inputElementCount - 1;
  const showSeparator = !showCompletedSeparator || (showCompletedSeparator && maxLength === inputValue?.length);

  return {
    id: `formatted-input-${id}-${index}`,
    type: inputType,
    value: inputValue,
    separator,
    validSeparator,
    showSeparator,
    onChange: handleChange,
    ref: isValidInputRef(inputRef) ? inputRef : undefined,
  };
};
