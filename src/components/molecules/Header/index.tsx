import clsx from 'clsx';
import { ComponentProps, ReactNode } from 'react';

import { HFlex } from '@/components/atoms/HFlex';

interface Props {
  heading: ReactNode;
  left?: ReactNode;
}

export const Header = ({
  left,
  heading,
  className,
  ...divProps
}: Props & ComponentProps<'div'>) => {
  return (
    <HFlex className={clsx(className)} {...divProps}>
      {left}
      {heading}
    </HFlex>
  );
};
