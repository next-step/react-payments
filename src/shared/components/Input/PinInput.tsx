import { PropsWithChildren, useContext, useMemo, forwardRef, FocusEvent } from 'react';
import { useInputFieldsValues, useInputRefs } from './hooks';
import { usePinInputField } from './hooks/usePinInputField';
import { PinInputContext } from './PinInput.context';
import { findComponentsInChildren } from './utils';
import {
  StyleProps,
  INPUT_COLOR,
  INPUT_FONT_SIZE,
  INPUT_FONT_WEIGHT,
  InputType,
  styleToken,
  Box,
  Label,
  TextField,
} from '@/shared';

type PinInputProps = PropsWithChildren<{
  id?: string;
  type?: InputType;
  mask?: boolean;
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  placeholder?: string;
  value?: string[];
  pattern?: RegExp;
  enableVirtualKeyboard?: boolean;
  onValueChange?: (details: { values: string[] }) => void;
  onValueComplete?: (details: { values: string[] }) => void;
}>;

export const PinInput = ({
  id = '',
  type = 'numeric',
  mask = false,
  placeholder = '*',
  value = [],
  pattern,
  enableVirtualKeyboard,
  onValueChange,
  onValueComplete,
  children,
}: PropsWithChildren<PinInputProps>) => {
  const formatFields = findComponentsInChildren(children, PinInputField.name);
  const inputElementCount = formatFields.length;

  const { value: values, update: updateValue } = useInputFieldsValues({
    values: value,
    pattern,
    onValueChange,
    onValueComplete,
  });
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
      enableVirtualKeyboard,
    }),
    [id, values, inputElementCount, placeholder, updateValue, type, mask, enableVirtualKeyboard],
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

const PinInputField = forwardRef<
  HTMLInputElement,
  {
    index: number;
    readOnly?: boolean;
    onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
    onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
  } & StyleProps
>(
  (
    {
      index,
      readOnly,
      color = INPUT_COLOR,
      fontSize = INPUT_FONT_SIZE,
      fontWeight = INPUT_FONT_WEIGHT,
      onBlur,
      onFocus,
      ...props
    },
    ref,
  ) => {
    const { error, ...restPinInputField } = usePinInputField({ ref, index, onBlur, onFocus });

    return (
      <TextField
        variant="filled"
        maxLength={1}
        readOnly={readOnly}
        width="43px"
        color={color}
        fontSize={fontSize}
        fontWeight={fontWeight}
        textAlign="center"
        {...(error && { outline: `2px solid ${styleToken.color.rose}` })}
        {...restPinInputField}
        {...props}
      />
    );
  },
);

PinInput.displayName = 'PinInput';

PinInput.Root = PinInput;
PinInput.Input = PinInputField;
PinInput.Label = PinInputLabel;
PinInput.Control = PinInputControl;
