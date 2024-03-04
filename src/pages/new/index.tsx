import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFunnel } from '@/hooks';
import FormContext from './context';
import { CardInfo, CardName } from './steps';

const New = () => {
  const navigate = useNavigate();
  const [totalFormData, setTotalFormData] = useState(new Map());
  const [Funnel, setStep] = useFunnel('cardInfo');

  return (
    <FormContext.Provider
      value={{
        totalFormData,
        setTotalFormData,
      }}
    >
      <Funnel>
        <Funnel.Step name='cardInfo'>
          <CardInfo next={() => setStep('cardName')} />
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
