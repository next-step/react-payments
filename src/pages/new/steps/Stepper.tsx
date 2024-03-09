import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFunnel } from '@/hooks';
import { CardInfo, CardName } from './';
import { FormMachineContext } from '@/pages/new';
import type { FormItems, FormItemKeys, FormItemValues } from '@/types/form';

const Stepper = () => {
  const formState = FormMachineContext.useSelector((state) => state);
  const step = formState.value;
  const totalFormData = FormMachineContext.useSelector(
    (state) => state.context.totalFormData
  );
  const navigate = useNavigate();
  const [Funnel, setStep] = useFunnel(step);
  const formActorRef = FormMachineContext.useActorRef();

  useEffect(() => {
    setStep(step);
  }, [step, setStep]);

  return (
    <Funnel>
      <Funnel.Step name='cardInfo'>
        <CardInfo
          next={(data: Map<Partial<FormItemKeys>, FormItemValues<FormItems>>) =>
            formActorRef.send({ type: 'NEXT_STEP', data })
          }
        />
      </Funnel.Step>
      <Funnel.Step name='cardName'>
        <CardName
          next={(
            data: Map<Partial<FormItemKeys>, FormItemValues<FormItems>>
          ) => {
            formActorRef.send({ type: 'NEXT_STEP', data });
            const newData = data
              ? new Map([...totalFormData, ...data])
              : totalFormData;
            navigate('/', {
              state: {
                data: newData,
              },
            });
          }}
        />
      </Funnel.Step>
    </Funnel>
  );
};

export default Stepper;
