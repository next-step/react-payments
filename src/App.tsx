import { AppLayout, CardProvider, Funnel } from '@/components';
import { CardAddPage, CardCompletePage, CardListPage } from '@/pages';

const App = () => (
  <AppLayout.Root>
    <CardProvider>
      <Funnel.Root>
        <Funnel.Step index={0}>
          <CardListPage />
        </Funnel.Step>
        <Funnel.Step index={1}>
          <CardAddPage />
        </Funnel.Step>
        <Funnel.Step index={2}>
          <CardCompletePage />
        </Funnel.Step>
      </Funnel.Root>
    </CardProvider>
  </AppLayout.Root>
);
export default App;
