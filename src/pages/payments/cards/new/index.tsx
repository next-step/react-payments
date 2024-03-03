import { useFunnel } from '@/hooks/useFunnel'

import { Step1 } from './components/Step1'

export const AddingCard = () => {
  const { Funnel, changeStep } = useFunnel<'a' | 'b'>('a')

  return (
    <Funnel>
      <Funnel.Step name="a">
        <Step1 onNext={() => changeStep('b')} />
      </Funnel.Step>
    </Funnel>
  )
}
