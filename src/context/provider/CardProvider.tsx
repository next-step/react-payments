import { PropsWithChildren } from 'react';

import { CardAddFormProvider, CardCompanyModalProvider, CardListProvider } from '..';

export default function CardProvider({ children }: PropsWithChildren) {
  return (
    <CardAddFormProvider>
      <CardCompanyModalProvider>
        <CardListProvider>{children}</CardListProvider>
      </CardCompanyModalProvider>
    </CardAddFormProvider>
  );
}
