import AddCard from './pages/card-add/AddCard';
import CardList from './pages/card-list/CardList';
import CardRegisterComplete from './pages/card-register-complete/CardRegisterComplete';
import CardInfoProvider from './provider/CardInfoProvider';
import StepProvider from './provider/step-provider/StepProvider';

const App = () => (
  <div className="root">
    <div className="app">
      <StepProvider>
        {(route) => (
          <>
            {['LIST'].includes(route) && <CardList />}
            {['CARD'].includes(route) && (
              <CardInfoProvider>
                <AddCard />
              </CardInfoProvider>
            )}
            {['COMPLETE'].includes(route) && <CardRegisterComplete />}
          </>
        )}
      </StepProvider>
    </div>
  </div>
);

export default App;
