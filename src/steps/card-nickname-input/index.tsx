import { Card, Flex, Text, UnderlineInput } from '@/components'
import { useCardInputContext } from '@/contexts'
import { CardBeforeRegister } from '@/types/card'
import { useRef } from 'react'

export interface CardNicknameInputStepProps {
  onClickConfirm?: (nickName: string) => void
  defaultCard?: CardBeforeRegister
}

export const CardNicknameInputStep = ({
  onClickConfirm,
  defaultCard,
}: CardNicknameInputStepProps) => {
  const {
    cardInput: { cardType, cardCode, cardExpDate, cardName },
    resetCardInput,
  } = useCardInputContext()

  const cardCodeValue = defaultCard?.cardCode ?? cardCode
  const cardTypeValue = defaultCard?.cardType ?? cardType
  const cardExpDateValue = defaultCard?.cardExpDate ?? cardExpDate
  const cardNameValue = defaultCard?.cardName ?? cardName

  const inputRef = useRef<HTMLInputElement>(null)

  const handleClickConfirm = () => {
    if (!cardTypeValue || !inputRef.current) return
    const nickNameInputValue = inputRef.current.value
    const cardNickname =
      nickNameInputValue.length > 0 ? nickNameInputValue : cardTypeValue.brandName
    onClickConfirm?.(cardNickname)
    resetCardInput()
  }

  return (
    <Flex width="100%" height="100vh" direction="column">
      <Flex direction="column" justifyContent="center" alignItems="center" marginTop="auto">
        <Text as="h1" variant="heading1" marginBottom="48px">
          카드등록이 완료되었습니다.
        </Text>
        <Card
          cardSize="lg"
          cardCode={cardCodeValue}
          cardType={cardTypeValue}
          cardExpDate={cardExpDateValue}
          cardName={cardNameValue}
          marginBottom="24px"
        />
        <UnderlineInput
          width="240px"
          placeholder="카드 별칭(선택)"
          contentAlign="center"
          maxLength={10}
          defaultValue={defaultCard?.cardNickName}
          ref={inputRef}
        />
      </Flex>
      <Flex justifyContent="flex-end" paddingX="24px" paddingY="32px" marginTop="auto">
        <Text as="button" variant="body1" color="aqua" onClick={handleClickConfirm}>
          확인
        </Text>
      </Flex>
    </Flex>
  )
}
