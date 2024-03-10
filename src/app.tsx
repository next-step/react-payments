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
  const [Funnel, , setFunnelState] = useFunnel([카드_목록, 카드_입력_폼, 카드_등록_완료] as const, {
    editMode: false,
  })

  return (
    <OverlayContextProvider>
      <CardInputContextProvider>
        <Flex justifyContent="center" backgroundColor="gray500">
          <Flex width="450px" height="100%" backgroundColor="white">
            <Funnel.Root>
              <Funnel.Step name={카드_목록}>
                <CardListStep
                  onClickRegister={() => setFunnelState(prev => ({ ...prev, step: 카드_입력_폼 }))}
                />
              </Funnel.Step>
              <Funnel.Step name={카드_입력_폼}>
                <CardInputFormStep
                  onClickPrev={() => setFunnelState(prev => ({ ...prev, step: 카드_목록 }))}
                  onSubmit={() => setFunnelState(prev => ({ ...prev, step: 카드_등록_완료 }))}
                />
              </Funnel.Step>
              <Funnel.Step name={카드_등록_완료}>
                <CardRegisterCompleteStep
                  onClickConfirm={() => setFunnelState(prev => ({ ...prev, step: 카드_목록 }))}
                />
              </Funnel.Step>
            </Funnel.Root>
          </Flex>
        </Flex>
      </CardInputContextProvider>
    </OverlayContextProvider>
  )
}

export default App

// 카드 수정

// 해당 카드가 들고있는 정보를 가지고 RegisterComplete으로 이동
