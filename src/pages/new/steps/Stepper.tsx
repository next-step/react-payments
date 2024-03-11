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
  const { value: step } = FormMachineContext.useSelector((state) => state);
  const navigate = useNavigate();
  const { state } = useLocation();
  const [Funnel, setStep] = useFunnel(step);

  useEffect(() => {
    setStep(step);
  }, [step, setStep]);

  formActorRef.subscribe((snapshot) => {
    if (snapshot.value === 'cardInfo' && state?.data) {
      formActorRef.send({
        type: 'NEXT_STEP_WITH_DATA',
        data: state.data,
      });
    }
    if (snapshot.status === 'done') {
      updateCardList(snapshot.output);
    }
  });

  const updateCardList = (
    newData: Map<FormItemKeys, FormItemValues<FormItems>>
  ) => {
    const newList = [
      mapToObj(newData),
      ...(getLocalStorage(CARD_LIST_KEY) || []),
    ];
    const uniqueList = newList.reduce((acc: FormItems[], cur: FormItems) => {
      const isExist = acc.find(
        (item) =>
          `${item.cardNumber1}${item.cardNumber2}${item.cardNumber3}${item.cardNumber4}` ===
          `${cur.cardNumber1}${cur.cardNumber2}${cur.cardNumber3}${cur.cardNumber4}`
      );
      if (!isExist) {
        acc.push(cur);
      }
      return acc;
    }, [] as FormItems[]);
    setLocalStorage(CARD_LIST_KEY, uniqueList);
    navigate('/');
  };

  return (
    <Funnel>
      <Funnel.Step name='cardInfo'>
        <CardInfo next={() => formActorRef.send({ type: 'NEXT_STEP' })} />
      </Funnel.Step>
      <Funnel.Step name='cardName'>
        <CardName
          next={() => {
            formActorRef.send({ type: 'NEXT_STEP' });
          }}
        />
      </Funnel.Step>
    </Funnel>
  );
};

export default Stepper;
