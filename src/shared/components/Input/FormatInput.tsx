import {
  PropsWithChildren,
  useContext,
  createContext,
  useMemo,
  RefObject,
  ReactElement,
  InputHTMLAttributes,
  ChangeEvent,
} from 'react';
import { useInputFieldsValues, useInputRefs } from './hooks';
import { findComponentsInChildren, isValidateInputValueByType, isValidInputRef } from './utils';
import type { StyleProps } from '@/shared';
import {
  styleToken,
  Box,
  HStack,
  Label,
  TextField,
  Typography,
  INPUT_COLOR,
  INPUT_FONT_SIZE,
  INPUT_FONT_WEIGHT,
  UpdateValueProps,
  InputType,
} from '@/shared';

export type FormatInputContextValue = {
  id: string;
  values: string[];
  inputElementCount: number;
  updateValue: ({ index, value, inputRefs, maxLength, focus }: UpdateValueProps) => void;
  inputRefs: RefObject<HTMLInputElement | null>[];
  type: InputType;
  mask: boolean;
  separator: string | ReactElement;
  showCompletedSeparator?: boolean;
};

type FormatInputProps = Partial<FormatInputContextValue> & {
  defaultValue: string[];
  onValueChange?: (payload: { values: string[] }) => void;
  onValueComplete?: (payload: { values: string[] }) => void;
};

const FormatInputContext = createContext<FormatInputContextValue | null>(null);

export const FormatInput = ({
  id = '',
  defaultValue,
  onValueChange,
  onValueComplete,
  type = 'alphanumeric',
  mask = false,
  separator = '',
  showCompletedSeparator = false,
  children,
  ...props
}: PropsWithChildren<FormatInputProps & StyleProps>) => {
  const formatFields = findComponentsInChildren(children, FormatField.name);
  const inputElementCount = formatFields.length;

  const { value: values, update: updateValue } = useInputFieldsValues(defaultValue, onValueChange, onValueComplete);
  const inputRefs = useInputRefs(inputElementCount);

  const contextValue = useMemo(
    () => ({
      id,
      values,
      inputElementCount,
      updateValue,
      inputRefs,
      type,
      mask,
      separator,
      showCompletedSeparator,
    }),
    [id, values, inputElementCount, type, mask, separator, showCompletedSeparator],
  );

  return (
    <FormatInputContext.Provider value={contextValue}>
      <Box {...props}>{children}</Box>
    </FormatInputContext.Provider>
  );
};

type FormatFieldProps = StyleProps &
  InputHTMLAttributes<HTMLInputElement> & {
    index: number;
    readOnly?: boolean;
    mask?: boolean;
    maxLength?: number;
    pattern?: RegExp;
    validateInput?: (value: string) => boolean;
  };

const FormatField = ({
  index,
  readOnly,
  mask,
  maxLength = Infinity,
  pattern,
  validateInput,
  width = '100%',
  color = INPUT_COLOR,
  fontSize = INPUT_FONT_SIZE,
  fontWeight = INPUT_FONT_WEIGHT,
  textAlign = 'left',
  ...props
}: FormatFieldProps & StyleProps) => {
  const context = useContext(FormatInputContext);
  if (context === null) {
    throw new Error('FormatInput.Input 컴포넌트는 FormatInput.Root 하위에서 사용되어야 합니다.');
  }

  const { id, inputElementCount, values, updateValue, inputRefs, type, separator, showCompletedSeparator } = context;
  const inputRef = inputRefs[index];

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
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

  return (
    <>
      <TextField
        id={`formatted-input-${id}-${index}`}
        type={inputType}
        variant="unstyled"
        maxLength={maxLength}
        value={inputValue}
        readOnly={readOnly}
        width={width}
        color={color}
        fontSize={fontSize}
        fontWeight={fontWeight}
        textAlign={textAlign}
        _placeholder={{
          color: styleToken.color.gray400,
        }}
        onChange={onChange}
        {...(isValidInputRef(inputRef) && { ref: inputRef })}
        {...props}
      />
      {validSeparator && (
        <Box display="flex" justifyContent="center" alignItems="center" minWidth="10px">
          {showSeparator && separator}
        </Box>
      )}
    </>
  );
};

const FormatInputLabel = ({ children }: PropsWithChildren) => {
  const context = useContext(FormatInputContext);
  if (context === null) {
    throw new Error('FormatInput.Input 컴포넌트는 FormatInput.Root 하위에서 사용되어야 합니다.');
  }
  const { id } = context;
  return (
    <Label htmlFor={`formatted-input-${id}-0`} variant="caption" color={styleToken.color.gray700}>
      {children}
    </Label>
  );
};

const FormatInputTextCounter = ({ index, ...props }: PropsWithChildren<{ index: number } & StyleProps>) => {
  const context = useContext(FormatInputContext);
  if (context === null) {
    throw new Error('FormatInput.Input 컴포넌트는 FormatInput.Root 하위에서 사용되어야 합니다.');
  }
  const { inputRefs } = context;
  const inputRef = inputRefs[index];
  const valueLength = inputRef.current?.value.length;
  const maxLength = inputRef.current?.maxLength;
  const counter = `${valueLength} / ${maxLength}`;

  return (
    <Typography variant="caption" color={styleToken.color.gray400} {...props}>
      {counter}
    </Typography>
  );
};

const FormatInputControl = ({
  children,
  justifyContent = 'space-between',
  gap = '5px',
  backgroundColor = styleToken.color.gray200,
  borderRadius = '7px',
  ...props
}: PropsWithChildren<StyleProps>) => (
  <HStack
    justifyContent={justifyContent}
    gap={gap}
    backgroundColor={backgroundColor}
    borderRadius={borderRadius}
    {...props}
  >
    {children}
  </HStack>
);

FormatInput.displayName = 'FormatInput';

FormatInput.Root = FormatInput;
FormatInput.Input = FormatField;
FormatInput.Label = FormatInputLabel;
FormatInput.TextCounter = FormatInputTextCounter;
FormatInput.Control = FormatInputControl;
