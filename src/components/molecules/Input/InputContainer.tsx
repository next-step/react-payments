import { PropsWithChildren } from 'react';

type ContainerProps = PropsWithChildren<{
  size?: string;
}>;

export default function InputContainer({ size, children }: ContainerProps) {
  return <div className={['input-container', size].join(' ')}>{children}</div>;
}
