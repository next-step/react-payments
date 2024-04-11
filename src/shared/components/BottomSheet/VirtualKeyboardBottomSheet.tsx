import { BottomSheet, Button, styleToken } from '@/shared';

type ButtonValue = {
  value: string;
  disabled: boolean;
};

interface VirtualKeyboardBottomSheetProps {
  onSubmit?: (submitResult: string) => void;
  onClick: (value: string) => void;
  values: string[];
  shuffle?: boolean;
}

export const VirtualKeyboardBottomSheet = ({ onClick, values, shuffle = false }: VirtualKeyboardBottomSheetProps) => {
  const shuffledValues = shuffle ? [...values].sort(() => 0.5 - Math.random()) : values;
  const virtualKeyboardButtons = prepareKeyboardButtons(shuffledValues);

  return (
    <BottomSheet padding="0" _grid={{ padding: 0 }}>
      {virtualKeyboardButtons.map((button, index) => (
        <Button
          key={`keyboard-button-${index}`}
          variant="ghost"
          color={styleToken.color.black}
          height="100%"
          onClick={() => button.value && onClick(button.value)}
          disabled={button.disabled}
        >
          {button.value}
        </Button>
      ))}
    </BottomSheet>
  );
};

const prepareKeyboardButtons = (values: string[]) => {
  const EMPTY_BUTTON_POSITIONS = [8, 11];
  return values.reduce<ButtonValue[]>((acc, currentValue, currentIndex) => {
    if (EMPTY_BUTTON_POSITIONS.includes(currentIndex)) {
      acc.push({ value: '', disabled: true });
    }
    acc.push({ value: currentValue, disabled: false });
    return acc;
  }, []);
};

VirtualKeyboardBottomSheet.displayName = 'VirtualKeyboardBottomSheet';
