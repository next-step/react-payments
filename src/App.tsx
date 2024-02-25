import { Funnel } from './componenets/funnel/Funnel';
import { useFunnel } from './componenets/funnel/context';
import { STEP } from './componenets/funnel/funnel.constant';

function App() {
  return (
    <Funnel initialStep={STEP.INITIAL_STEP}>
      qwe
      <Funnel.Step name={STEP.ADD_CARD}>
        <Step1 />
      </Funnel.Step>
      <Funnel.Step name={STEP.ADD_CARD_COMPLETE}>
        <Step2 />
      </Funnel.Step>
      {/* // FIXME: Step Type 에러 확인용 */}
      {/* <Funnel.Step name='step3'>
        <div>step3</div>
      </Funnel.Step> */}
    </Funnel>
  );
}

const Step1 = () => {
  const { setStep } = useFunnel();

  return <button onClick={() => setStep(STEP.ADD_CARD_COMPLETE)}>Next</button>;
};

const Step2 = () => {
  const { setStep } = useFunnel();

  return <button onClick={() => setStep(STEP.ADD_CARD)}>Back</button>;
};

export default App;
