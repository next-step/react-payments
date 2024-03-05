import { Portal } from '@/components/atoms';
import { ComponentProps } from 'react';
import { twJoin, twMerge } from 'tailwind-merge';

interface ModalProps extends ComponentProps<'div'> {
  fullScreen?: boolean;
  position?: 'center' | 'bottom';
}

export default function Modal({ children, fullScreen, position = 'center', className }: ModalProps) {
  return (
    <Portal>
      <div className={twJoin(position === 'center' ? 'grid place-items-center' : 'absolute bottom-0')}>
        <div className={twMerge('h-fit', twJoin(fullScreen ? 'w-fit' : 'w-full'), className)}>{children}</div>
      </div>
    </Portal>
  );
}
