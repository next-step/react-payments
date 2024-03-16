export type ButtonVariant = 'solid' | 'outline' | 'ghost';
export type ButtonVariantState = 'default' | 'hover';
export type ButtonColorScheme = 'teal' | 'gray';
export type ButtonOptionalProps = {
  variant?: ButtonVariant;
  colorScheme?: ButtonColorScheme;
};
export type ButtonHoverProps = {
  _hover?: {
    backgroundColor?: string;
    color?: string;
    border?: string;
  };
};
