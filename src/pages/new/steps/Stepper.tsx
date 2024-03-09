import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFunnel } from '@/hooks';
import { CardInfo, CardName } from './';
import { FormMachineContext } from '@/pages/new';
import { setLocalStorage, getLocalStorage, mapToObj } from '@/utils';
import { CARD_LIST_KEY } from '@/constants/key';
import type { FormItems, FormItemKeys, FormItemValues } from '@/types/form';

const Stepper = () => {
  const formActorRef = FormMachineContext.useActorRef();
  const { value: step, context } = FormMachineContext.useSelector(
    (state) => state
  );
  const { totalFormData } = context;
  const navigate = useNavigate();
  const [Funnel, setStep] = useFunnel(step);

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
            const newData = new Map([...totalFormData, ...data]);
            const newList = [
              mapToObj(newData),
              ...(getLocalStorage(CARD_LIST_KEY) || []),
            ];
            setLocalStorage(CARD_LIST_KEY, newList);
            navigate('/');
          }}
        />
      </Funnel.Step>
    </Funnel>
  );
};

export default Stepper;
