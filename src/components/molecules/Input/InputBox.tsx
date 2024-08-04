import { PropsWithChildren } from 'react';

type InputBoxProps = PropsWithChildren<{
  children: React.ReactNode;
  className?: string;
}>;

export default function InputBox({ className, children }: InputBoxProps) {
  return <div className={['input-box', className].join(' ')}>{children}</div>;
}
