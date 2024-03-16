import { PropsWithChildren, useContext, createContext, FormEvent, useMemo, RefObject } from 'react';
import { useInputFieldsValues, useInputRefs } from './hooks';
import { findComponentsInChildren, isValidateInputValueByType, isValidInputRef } from './utils';
import type { StyleProps } from '@/shared';
import {
  INPUT_COLOR,
  INPUT_FONT_SIZE,
  INPUT_FONT_WEIGHT,
  InputType,
  UpdateValueProps,
  styleToken,
  Box,
  Label,
  TextField,
} from '@/shared';

type PinInputContextValue = {
  id: string;
  values: string[];
  inputElementCount: number;
  placeholder: string;
  updateValue: ({ index, value, inputRefs, maxLength, focus }: UpdateValueProps) => void;
  inputRefs: RefObject<HTMLInputElement | null>[];
  type: InputType;
  mask: boolean;
};

type PinInputProps = PropsWithChildren<{
  id?: string;
  type?: InputType;
  mask?: boolean;
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  placeholder?: string;
  defaultValue?: string[];
  onValueChange?: (details: { values: string[] }) => void;
  onValueComplete?: (details: { values: string[] }) => void;
}>;

const PinInputContext = createContext<PinInputContextValue | null>(null);

export const PinInput = ({
  id = '',
  type = 'numeric',
  mask = false,
  placeholder = '*',
  defaultValue = [],
  onValueChange,
  onValueComplete,
  children,
}: PropsWithChildren<PinInputProps>) => {
  const formatFields = findComponentsInChildren(children, PinInputField.name);
  const inputElementCount = formatFields.length;

  const { value: values, update: updateValue } = useInputFieldsValues(defaultValue, onValueChange, onValueComplete);
  const inputRefs = useInputRefs(inputElementCount);

  const contextValue = useMemo(
    () => ({
      id,
      values,
      inputElementCount,
      placeholder,
      updateValue,
      inputRefs,
      type,
      mask,
    }),
    [id, values, inputElementCount, placeholder, updateValue, type, mask],
  );
  return <PinInputContext.Provider value={contextValue}>{children}</PinInputContext.Provider>;
};

const PinInputLabel = ({ children }: PropsWithChildren) => {
  const context = useContext(PinInputContext);
  if (context === null) {
    throw new Error('FormatInput.Input 컴포넌트는 FormatInput.Root 하위에서 사용되어야 합니다.');
  }
  const { id } = context;
  return (
    <Label htmlFor={`pin-input-${id}-0`} variant="caption" color={styleToken.color.gray700}>
      {children}
    </Label>
  );
};

const PinInputControl = ({ children }: PropsWithChildren) => (
  <Box display="flex" justifyContent="flex-start" marginTop="2px">
    {children}
  </Box>
);

const PinInputField = ({
  index,
  readOnly,
  color = INPUT_COLOR,
  fontSize = INPUT_FONT_SIZE,
  fontWeight = INPUT_FONT_WEIGHT,
  ...props
}: { index: number; readOnly?: boolean } & StyleProps) => {
  const context = useContext(PinInputContext);
  if (context === null) {
    throw new Error('PinInput.Input 컴포넌트는 PinInput.Root 하위에서 사용되어야 합니다.');
  }

  const { id, inputElementCount, placeholder, values, updateValue, inputRefs, type, mask } = context;
  const inputRef = inputRefs[index];

  const onChange = (e: FormEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value;
    if (!isValidateInputValueByType(type, inputValue)) {
      return;
    }
    updateValue({
      index,
      value: inputValue,
      inputRefs,
      maxLength: 1,
      focus: !readOnly,
    });
  };

  const isLastInput = index === inputElementCount - 1;
  const inputType = mask ? 'password' : 'text';
  const inputValue = index < inputElementCount ? values[index] : placeholder;
  const marginRight = isLastInput ? '0' : '10px';

  return (
    <TextField
      id={`pin-input-${id}-${index}`}
      type={inputType}
      variant="filled"
      maxLength={1}
      value={inputValue}
      readOnly={readOnly}
      width="43px"
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}
      textAlign="center"
      marginRight={marginRight}
      onChange={onChange}
      {...(isValidInputRef(inputRef) && { ref: inputRef })}
      {...props}
    />
  );
};

PinInput.displayName = 'PinInput';

PinInput.Root = PinInput;
PinInput.Input = PinInputField;
PinInput.Label = PinInputLabel;
PinInput.Control = PinInputControl;
