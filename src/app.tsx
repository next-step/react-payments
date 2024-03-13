import { OverlayContextProvider } from '@/contexts/overlay-context'
import { CardInputContextProvider } from '@/contexts/card-input-context'
import { CardInputFormStep } from '@/steps/card-register'
import { CardListStep } from './steps/card-list'
import { CardNicknameInputStep } from '@/steps/card-nickname-input'
import { Flex, Stepper } from '@/components'
import { usePaymentsStepMachine } from '@/hooks/use-payments-step-machine'

function App() {
  const [currentStep, { cardList, cardBeforeRegister }, send] = usePaymentsStepMachine()

  return (
    <OverlayContextProvider>
      <CardInputContextProvider>
        <Flex justifyContent="center" backgroundColor="gray500">
          <Flex width="450px" height="100%" backgroundColor="white">
            <Stepper currentStep={currentStep}>
              <Stepper.Step name="카드_목록">
                <CardListStep
                  cardList={cardList}
                  onClickRegisterButton={() =>
                    send({
                      type: 'create_start',
                    })
                  }
                  onClickStartEditButton={targetCard => {
                    send({
                      type: 'edit_start',
                      targetCard,
                    })
                  }}
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
                      type: 'create_card_input',
                      cardInput,
                    })
                  }
                />
              </Stepper.Step>
              <Stepper.Step name="카드_등록_확인">
                <CardNicknameInputStep
                  onClickConfirm={nickName =>
                    send({
                      type: 'create_confirm',
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
                      type: 'edit_confirm',
                      nickName,
                    })
                  }
                />
              </Stepper.Step>
            </Stepper>
          </Flex>
        </Flex>
      </CardInputContextProvider>
    </OverlayContextProvider>
  )
}

export default App
