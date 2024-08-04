import { PropsWithChildren } from 'react';

export default function CardMiddle({ children }: PropsWithChildren) {
  return <div className='card-middle'>{children}</div>;
}
