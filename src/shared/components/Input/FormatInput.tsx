import {
  PropsWithChildren,
  useContext,
  useMemo,
  useRef,
  RefObject,
  InputHTMLAttributes,
  FocusEvent,
  forwardRef,
} from 'react';
import { FormatInputContext, FormatInputContextValue } from './FormatInput.context';
import { useFormatInputTextCounter, useInputFieldsValues, useInputRefs } from './hooks';
import { useFormatInputField } from './hooks/useFormatInputField';
import { INPUT_COLOR, INPUT_FONT_SIZE, INPUT_FONT_WEIGHT } from './Input.constant';
import { findComponentsInChildren } from './utils';
import { StyleProps, styleToken, Box, HStack, Label, TextField, Typography } from '@/shared';

type FormatInputProps = Partial<FormatInputContextValue> & {
  value: string[];
  pattern?: RegExp;
  onValueChange?: (payload: { values: string[] }) => void;
  onValueComplete?: (payload: { values: string[] }) => void;
};

export const FormatInput = ({
  children,
  id = '',
  value,
  type = 'alphanumeric',
  mask = false,
  separator = '',
  showCompletedSeparator = false,
  pattern,
  onValueChange,
  onValueComplete,
  ...props
}: PropsWithChildren<FormatInputProps & StyleProps>) => {
  const formatFields = findComponentsInChildren(children, FormatField.name);
  const inputElementCount = formatFields.length;

  const inputFields = useInputFieldsValues({ values: value, pattern, onValueChange, onValueComplete });
  const inputRefs = useInputRefs(inputElementCount);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleBlur = (event: FocusEvent<HTMLDivElement>) => {
    if (containerRef.current && !containerRef.current.contains(event.relatedTarget as Node)) {
      inputFields.validate();
    }
  };

  const contextValue = useMemo(
    () => ({
      id,
      values: inputFields.value,
      updateValue: inputFields.update,
      inputElementCount,
      inputRefs,
      type,
      mask,
      separator,
      showCompletedSeparator,
      error: inputFields.error,
    }),
    [
      id,
      inputFields.value,
      inputFields.update,
      inputElementCount,
      inputRefs,
      type,
      mask,
      separator,
      showCompletedSeparator,
      inputFields.error,
    ],
  );

  return (
    <FormatInputContext.Provider value={contextValue}>
      <Box onBlur={handleBlur} ref={containerRef} {...props}>
        {children}
      </Box>
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

const FormatField = forwardRef<HTMLInputElement, FormatFieldProps & StyleProps>(
  (
    {
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
    }: FormatFieldProps & StyleProps,
    ref,
  ) => {
    const { separator, validSeparator, showSeparator, ...restFormatInputField } = useFormatInputField({
      ref,
      index,
      readOnly,
      mask,
      maxLength,
      pattern,
      validateInput,
    });

    return (
      <>
        <TextField
          variant="unstyled"
          maxLength={maxLength}
          readOnly={readOnly}
          width={width}
          color={color}
          fontSize={fontSize}
          fontWeight={fontWeight}
          textAlign={textAlign}
          _placeholder={{
            color: styleToken.color.gray400,
          }}
          {...restFormatInputField}
          {...props}
        />
        {validSeparator && (
          <Box display="flex" justifyContent="center" alignItems="center" minWidth="10px">
            {showSeparator && separator}
          </Box>
        )}
      </>
    );
  },
);

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

const FormatInputTextCounter = ({
  index,
  inputRef: propInputRef,
  ...props
}: PropsWithChildren<
  {
    index: number;
    inputRef?: RefObject<HTMLInputElement | null>;
  } & StyleProps
>) => {
  const inputTextCounter = useFormatInputTextCounter({ index, inputRef: propInputRef });

  return (
    <Typography variant="caption" color={styleToken.color.gray400} {...props}>
      {inputTextCounter.value}
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
}: PropsWithChildren<StyleProps>) => {
  const context = useContext(FormatInputContext);
  if (context === null) {
    throw new Error('FormatInput.Input 컴포넌트는 FormatInput.Root 하위에서 사용되어야 합니다.');
  }
  return (
    <HStack
      justifyContent={justifyContent}
      gap={gap}
      backgroundColor={backgroundColor}
      borderRadius={borderRadius}
      {...(context.error && { outline: `2px solid ${styleToken.color.rose}` })}
      {...props}
    >
      {children}
    </HStack>
  );
};

FormatInput.displayName = 'FormatInput';

FormatInput.Root = FormatInput;
FormatInput.Input = FormatField;
FormatInput.Label = FormatInputLabel;
FormatInput.TextCounter = FormatInputTextCounter;
FormatInput.Control = FormatInputControl;
