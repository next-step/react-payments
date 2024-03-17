import {
  CardCodeInput,
  CardExpDateInput,
  CardPinInput,
  CardNameInput,
  Flex,
  Text,
  Header,
  BaseInput,
  Card,
  CardCodeInputHandle,
  CardExpDateInputHandle,
  CardTypePicker,
  SecurityNumberPad,
  CardPinInputHandle,
  Tooltip,
} from '@/components'
import { CardInputState } from '@/types/card'
import { FormEventHandler, useRef } from 'react'
import { useCardInputContext } from '@/contexts/card-input-context.tsx'
import { useOverlay } from '@/hooks'
import { CARD_TYPE } from '@/constants/card-type.ts'
import { IconHelpCircle } from '@tabler/icons-react'
import { vars } from '@/styles'

export interface CardInputFormStepProps {
  onClickPrev?: () => void
  onSubmit?: (cardState: CardInputState) => void
}

export const CardInputFormStep = ({ onSubmit, onClickPrev }: CardInputFormStepProps) => {
  const { cardInput, setCardInput, resetCardInput } = useCardInputContext()
  const { cardCode, cardExpDate, cardName, cardCVC, cardPin, cardType } = cardInput
  const cardCodeInputRef = useRef<CardCodeInputHandle>(null)
  const cardExpDateInputRef = useRef<CardExpDateInputHandle>(null)
  const cardNameInputRef = useRef<HTMLInputElement>(null)
  const cardPinInputRef = useRef<CardPinInputHandle>(null)

  const [openOverlay, closeOverlay] = useOverlay()

  const handleClickPrev = () => {
    resetCardInput()
    onClickPrev?.()
  }

  const handleSubmit: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault()
    if (!cardType) return
    onSubmit?.({ ...cardInput, cardType })
  }

  const handleClickCard = () => {
    openOverlay(
      <CardTypePicker
        cardTypeList={Object.values(CARD_TYPE)}
        onClose={closeOverlay}
        selectedCardType={cardType}
        onSelectCardType={value => {
          setCardInput('cardType')(value)
          cardCodeInputRef.current?.focus()
        }}
      />,
    )
  }

  const handleOpenCVCInput = () => {
    openOverlay(
      <SecurityNumberPad
        key="card-cvc"
        title="보안 코드(CVC/CVV)를 입력하세요."
        defaultValue={cardCVC}
        maxLength={3}
        onClose={closeOverlay}
        onInputComplete={value => {
          setCardInput('cardCVC')(value)
          if (value.length >= 3) {
            closeOverlay()
            cardPinInputRef.current?.focus()
          }
        }}
      />,
    )
  }

  const handleOpenCardPinInput = () => {
    openOverlay(
      <SecurityNumberPad
        key="card-pin"
        title="카드 비밀번호를 입력하세요."
        defaultValue={cardPin}
        maxLength={2}
        onClose={closeOverlay}
        onInputComplete={value => {
          setCardInput('cardPin')(value)
          if (value.length >= 2) {
            closeOverlay()
          }
        }}
      />,
    )
  }

  return (
    <Flex direction="column" width="100%" height="100vh">
      <Header title="카드 추가" onClickPrev={handleClickPrev} />
      <Flex
        as="main"
        direction="column"
        height="100%"
        paddingX="24px"
        marginTop="48px"
        width="100%"
        onSubmit={handleSubmit}
      >
        <Flex justifyContent="center" marginBottom="32px">
          <Card
            cardCode={cardCode}
            cardName={cardName}
            cardExpDate={cardExpDate}
            cardType={cardType}
            onClick={handleClickCard}
          />
        </Flex>
        <Flex id="card-register-form" as="form" direction="column" width="100%" gap="36px">
          <CardCodeInput
            id="card-code"
            label="카드 번호"
            width="100%"
            textAlign="center"
            ref={cardCodeInputRef}
            value={cardCode}
            onChange={setCardInput('cardCode')}
            onInputComplete={cardExpDateInputRef.current?.focus}
          />
          <CardExpDateInput
            id="card-exp-date"
            ref={cardExpDateInputRef}
            label="만료일"
            value={cardExpDate}
            onChange={setCardInput('cardExpDate')}
            onInputComplete={() => cardNameInputRef.current?.focus()}
          />
          <CardNameInput
            id="card-name"
            label="카드 소유자 이름(선택)"
            ref={cardNameInputRef}
            value={cardName}
            onChange={setCardInput('cardName')}
          />
          <Flex alignItems="center" gap="24px">
            <BaseInput
              id="card-cvc"
              label="보안 코드(CVC/CVV)"
              type="password"
              maxLength={3}
              width="100px"
              textAlign="center"
              value={cardCVC}
              readOnly
              onKeyDown={e => e.preventDefault()}
              onFocus={handleOpenCVCInput}
            />
            <Tooltip label="카드 뒷면의 CVC란을 확인하세요">
              <IconHelpCircle color={vars.color.aqua} size={32} />
            </Tooltip>
          </Flex>

          <CardPinInput
            id="card-pin"
            label="카드 비밀번호"
            value={cardPin}
            ref={cardPinInputRef}
            readOnly
            onFocus={handleOpenCardPinInput}
          />
        </Flex>
        <Flex justifyContent="flex-end" paddingX="24px" paddingY="32px" marginTop="auto">
          <Text as="button" type="submit" variant="body1" color="aqua" form="card-register-form">
            다음
          </Text>
        </Flex>
      </Flex>
    </Flex>
  )
}
