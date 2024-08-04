import { PropsWithChildren } from 'react';

export default function InputHeader({ children }: PropsWithChildren) {
  return <div className='input-space-between'>{children}</div>;
}
