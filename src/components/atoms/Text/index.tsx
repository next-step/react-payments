import { TYPOGRAPHY_SIZE_MAP } from '@/styles/guide';
import { ComponentProps } from 'react';
import { twJoin, twMerge } from 'tailwind-merge';

export interface TextProps extends ComponentProps<'span'> {
  children: React.ReactNode;
  size?: keyof typeof TYPOGRAPHY_SIZE_MAP;
  className?: string;
  error?: boolean;
}

export default function Text({ children, className, size = 'base', error, ...restProps }: TextProps) {
  return (
    <span
      className={twMerge(TYPOGRAPHY_SIZE_MAP[size], twJoin(error ? 'text-red-600' : 'text-[#525252]'), className)}
      {...restProps}
    >
      {children}
    </span>
  );
}
