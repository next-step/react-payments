import { TYPOGRAPHY_SIZE_MAP } from '@/styles/guide';
import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

interface TextProps extends ComponentProps<'span'> {
  children: React.ReactNode;
  size?: keyof typeof TYPOGRAPHY_SIZE_MAP;
  className?: string;
}

export default function Text({ children, className, size = 'base', ...restProps }: TextProps) {
  return (
    <span className={twMerge(TYPOGRAPHY_SIZE_MAP[size], className)} {...restProps}>
      {children}
    </span>
  );
}
