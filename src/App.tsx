import Stepper from './pages/Stepper';
import MyCardsProvider from './provider/my-cards-provider/MyCardsProvider';
import StepProvider from './provider/step-provider/StepProvider';

const App = () => (
  <div className='root'>
    <MyCardsProvider>
      <StepProvider>
        <Stepper />
      </StepProvider>
    </MyCardsProvider>
  </div>
);

export default App;
