import { Funnel } from '@/components';
import { CardListPage, CardAddPage, CardCompletePage } from '@/pages';

const App = () => (
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
);
export default App;
