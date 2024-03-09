import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFunnel } from '@/hooks';
import FormContext from './context';
import { CardInfo, CardName } from './steps';
import { formMachine } from './context';
import { useMachine } from '@xstate/react';

const New = () => {
  const navigate = useNavigate();
  const [totalFormData, setTotalFormData] = useState(new Map());
  const [state, send] = useMachine(formMachine);
  const step = state.value;
  const [Funnel, setStep] = useFunnel(step);

  useEffect(() => {
    setStep(step);
  }, [step, setStep]);

  return (
    <FormContext.Provider
      value={{
        totalFormData,
        setTotalFormData,
      }}
    >
      <Funnel>
        <Funnel.Step name='cardInfo'>
          <CardInfo next={() => send({ type: 'NEXT_STEP' })} />
        </Funnel.Step>
        <Funnel.Step name='cardName'>
          <CardName
            next={() =>
              navigate('/', {
                state: {
                  data: totalFormData,
                },
              })
            }
          />
        </Funnel.Step>
      </Funnel>
    </FormContext.Provider>
  );
};

export default New;
