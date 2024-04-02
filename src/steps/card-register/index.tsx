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
  CardTypePickBottomSheet,
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
import { getCardTypeFromCardCode } from '@/utils/get-card-type-from-card-code'

export interface CardInputFormStepProps {
  onClickPrev?: () => void
  onSubmit?: (cardState: CardInputState) => void
}

export const CardInputFormStep = ({ onSubmit, onClickPrev }: CardInputFormStepProps) => {
  const { cardInput, cardInputError, validateCardInput, setCardInput, resetCardInput } =
    useCardInputContext()
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
    if (!validateCardInput(cardInput)) return
    onSubmit?.({ ...cardInput, cardType })
  }

  const handleClickCard = () => {
    openOverlay(
      <CardTypePickBottomSheet
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

  const handleChangeCardCodeInput = (value: string) => {
    if (value.length === 8) {
      setCardInput('cardType')(getCardTypeFromCardCode(value))
    }
    setCardInput('cardCode')(value)
  }

  const handleOpenCVCNumberPad = () => {
    openOverlay(
      <SecurityNumberPad
        key="card-cvc"
        title="보안 코드(CVC/CVV)를 입력하세요."
        defaultValue={cardCVC}
        maxLength={3}
        onClose={closeOverlay}
        onInput={setCardInput('cardCVC')}
        onInputComplete={() => {
          closeOverlay()
          cardPinInputRef.current?.focus()
        }}
      />,
    )
  }

  const handleOpenCardPinNumberPad = () => {
    openOverlay(
      <SecurityNumberPad
        key="card-pin"
        title="카드 비밀번호를 입력하세요."
        defaultValue={cardPin}
        maxLength={2}
        onClose={closeOverlay}
        onInput={setCardInput('cardPin')}
        onInputComplete={closeOverlay}
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
            onChange={handleChangeCardCodeInput}
            onInputComplete={cardExpDateInputRef.current?.focus}
            error={cardInputError.cardCode}
          />
          <CardExpDateInput
            id="card-exp-date"
            ref={cardExpDateInputRef}
            label="만료일"
            value={cardExpDate}
            onChange={setCardInput('cardExpDate')}
            onInputComplete={() => cardNameInputRef.current?.focus()}
            error={cardInputError.cardExpDate}
          />
          <CardNameInput
            id="card-name"
            label="카드 소유자 이름(선택)"
            ref={cardNameInputRef}
            value={cardName}
            onChange={setCardInput('cardName')}
            error={cardInputError.cardName}
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
              onFocus={handleOpenCVCNumberPad}
              error={cardInputError.cardCVC}
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
            onFocus={handleOpenCardPinNumberPad}
            error={cardInputError.cardPin}
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
