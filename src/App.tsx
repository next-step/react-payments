import AddCard from './pages/card-add/AddCard';
import CardList from './pages/card-list/CardList';
import CardRegisterComplete from './pages/card-register-complete/CardRegisterComplete';
import CardInfoProvider from './provider/card-info-provider/CardInfoProvider';
import MyCardsProvider from './provider/my-cards-provider/MyCardsProvider';
import StepProvider from './provider/step-provider/StepProvider';

const App = () => (
  <div className="root">
    <div className="app">
      <MyCardsProvider>
        <StepProvider>
          {(route) => (
            <>
              {'LIST' === route && <CardList />}
              <CardInfoProvider>
                {'CARD' === route && <AddCard />}
                {'COMPLETE' === route && <CardRegisterComplete />}
              </CardInfoProvider>
            </>
          )}
        </StepProvider>
      </MyCardsProvider>
    </div>
  </div>
);

export default App;
