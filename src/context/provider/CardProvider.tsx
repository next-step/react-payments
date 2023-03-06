import { PropsWithChildren } from 'react';

import { CardAddFormProvider, CardSelectModalProvider, CardListProvider } from '..';

export default function CardProvider({ children }: PropsWithChildren) {
  return (
    <CardAddFormProvider>
      <CardSelectModalProvider>
        <CardListProvider>{children}</CardListProvider>
      </CardSelectModalProvider>
    </CardAddFormProvider>
  );
}
