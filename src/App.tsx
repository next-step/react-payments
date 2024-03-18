import { CardProvider } from 'src/card/providers';
import { CardAddPage, CardCompletePage, CardListPage, CardPageIndex } from '@/card';
import { AppDisplay, Funnel } from '@/shared';

const App = () => (
  <AppDisplay.Root>
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
  </AppDisplay.Root>
);
export default App;
