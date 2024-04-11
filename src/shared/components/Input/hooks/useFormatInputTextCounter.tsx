import { useContext, RefObject } from 'react';
import { FormatInputContext } from '../FormatInput.context';

type UseFormatInputTextCounterProps = {
  index: number;
  inputRef?: RefObject<HTMLInputElement | null>;
};

export const useFormatInputTextCounter = ({ index, inputRef }: UseFormatInputTextCounterProps) => {
  const context = useContext(FormatInputContext);
  if (context === null) {
    throw new Error('FormatInput.Input 컴포넌트는 FormatInput.Root 하위에서 사용되어야 합니다.');
  }

  const { inputRefs } = context;
  const ref = inputRef || inputRefs[index];

  const currentLength = ref.current?.value.length ?? 0;
  const maxLength = ref.current?.maxLength ?? 0;

  const counterText = `${currentLength} / ${maxLength}`;

  return {
    currentLength,
    maxLength,
    value: counterText,
  };
};
