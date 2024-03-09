import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
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
  const { state } = useLocation();
  const [Funnel, setStep] = useFunnel(step);

  useEffect(() => {
    if (state?.data && step === 'cardInfo') {
      const { data } = state as {
        data: object;
      };
      formActorRef.send({
        type: 'NEXT_STEP',
        data: data as Map<Partial<FormItemKeys>, FormItemValues<FormItems>>,
      });
    }
  }, [formActorRef, state, step]);

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
            const uniqueList = newList.reduce(
              (acc: FormItems[], cur: FormItems) => {
                const isExist = acc.find(
                  (item) =>
                    `${item.cardNumber1}${item.cardNumber2}${item.cardNumber3}${item.cardNumber4}` ===
                    `${cur.cardNumber1}${cur.cardNumber2}${cur.cardNumber3}${cur.cardNumber4}`
                );
                if (!isExist) {
                  acc.push(cur);
                }
                return acc;
              },
              [] as FormItems[]
            );
            setLocalStorage(CARD_LIST_KEY, uniqueList);
            navigate('/');
          }}
        />
      </Funnel.Step>
    </Funnel>
  );
};

export default Stepper;
