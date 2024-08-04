import { PropsWithChildren } from 'react';

export const BottomSheetContent = ({
  children,
  style,
}: PropsWithChildren<{ style?: string }>) => {
  return <div className={style}>{children}</div>;
};
