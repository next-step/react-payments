import { useFunnel } from '@/hooks/use-funnel'
import { OverlayContextProvider } from '@/contexts/overlay-context'
import { CardInputContextProvider } from '@/contexts/card-input-context'
import { CardInputFormStep } from '@/steps/card-register'
import { CardListStep } from './steps/card-list'
import { CardRegisterCompleteStep } from '@/steps/card-register-complete'
import { Flex, Stepper } from '@/components'
import { useMachine, useActor } from '@xstate/react'
import { CardState } from '@/hooks/use-card-state.tsx'
import { paymentsMachine } from '@/xstate/payments-machine'

const 카드_목록 = 'card-list'
const 카드_입력_폼 = 'card-input-form'
const 카드_등록_완료 = 'card-register-complete'

function App() {
  // const [Funnel, funnelState, setFunnelState] = useFunnel<{ editableCardId?: CardState['id'] }>(
  //   [카드_목록, 카드_입력_폼, 카드_등록_완료] as const,
  //   {},
  // )
  const [state, send, actor] = useMachine(paymentsMachine)

  const currentStep = state.value as string

  const [Funnel] = useFunnel(['카드_목록', 'EDIT', 'CREATE', 'CREATE_CONFIRM'] as const, {})

  return (
    <OverlayContextProvider>
      <CardInputContextProvider>
        <Flex justifyContent="center" backgroundColor="gray500">
          <Flex width="450px" height="100%" backgroundColor="white">
            <Stepper currentStep={currentStep}>
              <Stepper.Step name="카드_목록">
                <CardListStep
                  cardList={state.context.cardList}
                  onNavigateToRegister={() =>
                    send({
                      type: 'create_start',
                    })
                  }
                  onClickRemoveButton={targetId =>
                    send({
                      type: 'remove',
                      targetId,
                    })
                  }
                />
              </Stepper.Step>
              <Stepper.Step name="카드_등록">
                <CardInputFormStep
                  onClickPrev={() =>
                    send({
                      type: 'create_cancel',
                    })
                  }
                  onSubmit={cardInput =>
                    send({
                      type: 'create_step1',
                      cardInput,
                    })
                  }
                />
              </Stepper.Step>
              <Stepper.Step name="카드_등록_확인">
                <CardRegisterCompleteStep
                  onClickConfirm={nickName =>
                    send({
                      type: 'create_step2',
                      nickName,
                    })
                  }
                />
              </Stepper.Step>
            </Stepper>
            {/* <Funnel.Root>
              <Funnel.Step name={카드_목록}>
                <CardListStep
                  onNavigateToRegister={() =>
                    setFunnelState(prev => ({ ...prev, step: 카드_입력_폼 }))
                  }
                  onNavigateToEdit={(id: CardState['id']) =>
                    setFunnelState(prev => ({
                      ...prev,
                      step: 카드_등록_완료,
                      editableCardId: id,
                    }))
                  }
                />
              </Funnel.Step>
              <Funnel.Step name={카드_입력_폼}>
                <CardInputFormStep
                  onClickPrev={() => setFunnelState(prev => ({ ...prev, step: 카드_목록 }))}
                  onSubmit={() =>
                    setFunnelState(prev => ({
                      ...prev,
                      step: 카드_등록_완료,
                    }))
                  }
                />
              </Funnel.Step>
              <Funnel.Step name={카드_등록_완료}>
                <CardRegisterCompleteStep
                  editableCardId={funnelState?.editableCardId}
                  onClickConfirm={() =>
                    setFunnelState(prev => ({
                      ...prev,
                      step: 카드_목록,
                      editableCardId: undefined,
                    }))
                  }
                />
              </Funnel.Step>
            </Funnel.Root> */}
          </Flex>
        </Flex>
      </CardInputContextProvider>
    </OverlayContextProvider>
  )
}

export default App

// 카드 수정

// 해당 카드가 들고있는 정보를 가지고 RegisterComplete으로 이동
