import { PropsWithChildren } from 'react';

import CardProvider from './CardProvider';

export default function ProviderContainer({ children }: PropsWithChildren) {
  return <CardProvider>{children}</CardProvider>;
}
