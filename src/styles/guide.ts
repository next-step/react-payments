type TypographyVariantKeys = '4xl' | '3xl' | '2xl' | 'xl' | 'lg' | 'base' | 'sm' | 'xs';
type TypographyClasses =
  | 'text-4xl'
  | 'text-3xl'
  | 'text-2xl'
  | 'text-xl'
  | 'text-lg'
  | 'text-base'
  | 'text-sm'
  | 'text-xs';

type TypographyVariants = Record<TypographyVariantKeys, TypographyClasses>;

export const TYPOGRAPHY_SIZE_MAP: Readonly<TypographyVariants> = {
  '4xl': 'text-4xl',
  '3xl': 'text-3xl',
  '2xl': 'text-2xl',
  xl: 'text-xl',
  lg: 'text-lg',
  base: 'text-base',
  sm: 'text-sm',
  xs: 'text-xs',
};
