import { OverlayContextProvider } from '@/contexts/overlay-context'
import { CardInputContextProvider } from '@/contexts/card-input-context'
import { CardInputFormStep } from '@/steps/card-register'
import { CardListStep } from './steps/card-list'
import { CardNicknameInputStep } from '@/steps/card-nickname-input'
import { Flex, FlexElements, FlexProps, Stepper } from '@/components'
import { usePaymentsStepMachine } from '@/hooks/use-payments-step-machine'

export type PaymentsAppProps<C extends FlexElements> = FlexProps<C>

export const PaymentsApp = <C extends FlexElements = 'div'>(props: PaymentsAppProps<C>) => {
  const [currentStep, { cardList, cardBeforeRegister }, send] = usePaymentsStepMachine()

  return (
    <OverlayContextProvider>
      <CardInputContextProvider>
        <Flex {...props}>
          <Stepper currentStep={currentStep}>
            <Stepper.Step name="카드_목록">
              <CardListStep
                cardList={cardList}
                onClickRegisterButton={() =>
                  send({
                    type: '카드_등록_시작',
                  })
                }
                onClickStartEditButton={targetCard => {
                  send({
                    type: '카드_수정_시작',
                    targetCard,
                  })
                }}
                onClickRemoveButton={targetId =>
                  send({
                    type: '카드_삭제',
                    targetId,
                  })
                }
              />
            </Stepper.Step>
            <Stepper.Step name="카드_등록">
              <CardInputFormStep
                onClickPrev={() =>
                  send({
                    type: '카드_등록_취소',
                  })
                }
                onSubmit={cardInput =>
                  send({
                    type: '카드_정보_입력',
                    cardInput,
                  })
                }
              />
            </Stepper.Step>
            <Stepper.Step name="카드_등록_확인">
              <CardNicknameInputStep
                onClickConfirm={nickName =>
                  send({
                    type: '카드_별명_입력',
                    nickName,
                  })
                }
              />
            </Stepper.Step>
            <Stepper.Step name="카드_수정">
              <CardNicknameInputStep
                defaultCard={cardBeforeRegister}
                onClickConfirm={nickName =>
                  send({
                    type: '카드_별명_수정',
                    nickName,
                  })
                }
              />
            </Stepper.Step>
          </Stepper>
        </Flex>
      </CardInputContextProvider>
    </OverlayContextProvider>
  )
}
