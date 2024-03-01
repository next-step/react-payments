import { HFlex } from '@/components/atoms';
import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

interface HeaderProps extends ComponentProps<'div'> {}

export default function Header({ children, className }: HeaderProps) {
  return <HFlex className={twMerge('gap-2', className)}>{children}</HFlex>;
}
