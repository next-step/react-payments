import { useStepper } from '@/hooks/useStepper';
import { CardInfoProvider } from '@/context/CardInfo';
import { OverlayProvider } from '@/context/Overlay';
import AddCard from './stepper/AddCard';
import AddCardCompleted from './stepper/AddCardCompleted';
import CardList from './stepper/CardList';

export type StepType = typeof CARD_REGISTRATION_STEPS;

const CARD_REGISTRATION_STEPS = [
  '카드_입력',
  '카드_입력_완료',
  '카드_목록',
] as const;

export default function Payments() {
  const { Stepper, Step, setStep } = useStepper<StepType>(
    CARD_REGISTRATION_STEPS
  );

  const onChangeStep = (step: 0 | 1 | 2) => () => {
    setStep(CARD_REGISTRATION_STEPS[step]);
  };

  return (
    <OverlayProvider>
      <CardInfoProvider>
        <Stepper>
          <Step name='카드_입력'>
            <AddCard onNext={onChangeStep(1)} onPrevious={onChangeStep(2)} />
          </Step>
          <Step name='카드_입력_완료'>
            <AddCardCompleted onNext={onChangeStep(2)} />
          </Step>
          <Step name='카드_목록'>
            <CardList onNext={onChangeStep(0)} moveToStep={onChangeStep(1)} />
          </Step>
        </Stepper>
      </CardInfoProvider>
    </OverlayProvider>
  );
}
