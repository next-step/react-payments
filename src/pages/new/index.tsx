import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFunnel } from '@/hooks';
import FormContext from './context';
import { Step1, Step2 } from './steps';

const New = () => {
  const navigate = useNavigate();
  const [totalFormData, setTotalFormData] = useState(new Map());
  const [Funnel, setStep] = useFunnel('1');

  return (
    <FormContext.Provider
      value={{
        totalFormData,
        setTotalFormData,
      }}
    >
      <Funnel>
        <Funnel.Step name='1'>
          <Step1 next={() => setStep('2')} />
        </Funnel.Step>
        <Funnel.Step name='2'>
          <Step2
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
