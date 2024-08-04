import { PropsWithChildren } from 'react';

export default function CardTop({ children }: PropsWithChildren) {
  return <div className='card-top'>{children}</div>;
}
