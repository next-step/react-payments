import Stepper from './pages/Stepper';
import CardInfoProvider from './provider/card-info-provider/CardInfoProvider';
import StepProvider from './provider/step-provider/StepProvider';

const App = () => (
  <div className="root">
    <CardInfoProvider>
      <StepProvider>
        <Stepper />
      </StepProvider>
    </CardInfoProvider>
  </div>
);

export default App;
