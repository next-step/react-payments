import { useFunnel } from '@/hooks/use-funnel'
import { OverlayContextProvider } from '@/contexts/overlay-context'
import { CardInputContextProvider } from '@/contexts/card-input-context'
import { CardInputFormStep } from '@/steps/card-register'
import { CardListStep } from './steps/card-list'
import { CardRegisterCompleteStep } from '@/steps/card-register-complete'
import { Flex } from '@/components'

const 카드_목록 = 'card-list'
const 카드_입력_폼 = 'card-input-form'
const 카드_등록_완료 = 'card-register-complete'

function App() {
  const [Funnel, step, setStep] = useFunnel(카드_입력_폼)

  return (
    <OverlayContextProvider>
      <CardInputContextProvider>
        <Flex justifyContent="center" backgroundColor="gray500">
          <Flex width="450px" height="100%" backgroundColor="white">
            <Funnel.Root step={step}>
              <Funnel.Step name={카드_목록}>
                <CardListStep onClickRegister={() => setStep(카드_입력_폼)} />
              </Funnel.Step>
              <Funnel.Step name={카드_입력_폼}>
                <CardInputFormStep
                  onClickPrev={() => setStep(카드_목록)}
                  onSubmit={() => setStep(카드_등록_완료)}
                />
              </Funnel.Step>
              <Funnel.Step name={카드_등록_완료}>
                <CardRegisterCompleteStep onClickConfirm={() => setStep(카드_목록)} />
              </Funnel.Step>
            </Funnel.Root>
          </Flex>
        </Flex>
      </CardInputContextProvider>
    </OverlayContextProvider>
  )
}

export default App
