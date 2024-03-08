import { buttonColorToken } from './Button.token';
import type { ButtonColorScheme, ButtonVariant, ButtonVariantState } from './Button.type';

export const getButtonColor = (colorScheme: ButtonColorScheme, variant: ButtonVariant, state: ButtonVariantState) => {
  const colorInfo = buttonColorToken[colorScheme][variant];
  return colorInfo[state];
};
