import { FocusEvent, FormEvent, ForwardedRef, useContext, useState } from 'react';
import { PinInputContext } from '../PinInput.context';
import { isValidateInputValueByType, isValidInputRef } from '../utils';
import { CARD_PASSWORD_NUMBERS } from '@/card';
import { Overlay, useOverlay, VirtualKeyboardBottomSheet } from '@/shared';

type UsePinInputFieldProps = {
  ref?: ForwardedRef<HTMLInputElement>;
  index: number;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
};

export const usePinInputField = ({ ref, index, onBlur, onFocus }: UsePinInputFieldProps) => {
  const context = useContext(PinInputContext);
  if (!context) {
    throw new Error('PinInput.Input 컴포넌트는 PinInput.Root 하위에서 사용되어야 합니다.');
  }

  const overlay = useOverlay();
  const { id, inputElementCount, placeholder, values, updateValue, inputRefs, type, mask, enableVirtualKeyboard } =
    context;
  const inputRef = ref || inputRefs[index];
  const [error, setError] = useState(false);

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value;

    if (enableVirtualKeyboard || !isValidateInputValueByType(type, inputValue)) {
      return;
    }

    updateValue({ index, value: inputValue, inputRefs, maxLength: 1, focus: true });
    setError(false);
  };

  const isLastInput = index === inputElementCount - 1;
  const inputType = mask ? 'password' : 'text';
  const inputValue = index < inputElementCount ? values[index] : placeholder;
  const marginRight = isLastInput ? '0' : '10px';

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    onBlur?.(e);
    setError(isValidInputRef(inputRef) && inputRef.current?.value.length === 0);
  };

  const handleFocus = async (e: FocusEvent<HTMLInputElement>) => {
    if (enableVirtualKeyboard) {
      const virtualKeyboardValues = CARD_PASSWORD_NUMBERS.map(String);
      const keyboardValue = await new Promise<string>((resolve) => {
        overlay.open(({ close, opened }) => (
          <Overlay opened={opened} placement="bottom">
            <VirtualKeyboardBottomSheet
              values={virtualKeyboardValues}
              shuffle
              onClick={(value) => {
                close();
                resolve(value);
              }}
            />
            ,
          </Overlay>
        ));
      });
      if (keyboardValue) {
        updateValue({ index, value: keyboardValue, inputRefs, maxLength: 1, focus: true });
      }
    }

    onFocus?.(e);
    setError(false);
  };

  return {
    id: `pin-input-${id}-${index}`,
    type: inputType,
    value: inputValue,
    marginRight,
    error,
    onChange: handleChange,
    onBlur: handleBlur,
    onFocus: handleFocus,
    ref: isValidInputRef(inputRef) ? inputRef : undefined,
  };
};
