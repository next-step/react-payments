import { CardProvider } from 'src/card/providers';
import { CardAddPage, CardCompletePage, CardListPage, CardPageIndex } from '@/card';
import { AppLayout, Funnel } from '@/shared';

const App = () => (
  <AppLayout.Root>
    <CardProvider>
      <Funnel.Root>
        <Funnel.Step index={CardPageIndex.CardListPage}>
          <CardListPage />
        </Funnel.Step>
        <Funnel.Step index={CardPageIndex.CardAddPage}>
          <CardAddPage />
        </Funnel.Step>
        <Funnel.Step index={CardPageIndex.CardCompletePage}>
          <CardCompletePage />
        </Funnel.Step>
      </Funnel.Root>
    </CardProvider>
  </AppLayout.Root>
);
export default App;
