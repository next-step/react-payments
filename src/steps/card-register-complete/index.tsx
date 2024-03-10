import { Card, Flex, Text, UnderlineInput } from '@/components'
import { useCardInputContext } from '@/contexts'
import { CardState, useCardState } from '@/hooks/use-card-state.tsx'

export interface CardRegisterCompleteStepProps {
  onClickConfirm: () => void
  editableCardId?: CardState['id']
}

export const CardRegisterCompleteStep = ({
  onClickConfirm,
  editableCardId,
}: CardRegisterCompleteStepProps) => {
  const { addCard, editCard } = useCardState()
  const { cardInput, setCardInput, resetCardInput } = useCardInputContext()
  const { cardName, cardExpDate, cardCode, cardType, cardNickName } = cardInput

  const handleClickConfirm = () => {
    if (!cardType) return
    const completedCardInput = {
      ...cardInput,
      cardNickName: cardNickName === '' ? cardType.name : cardNickName,
    }
    if (editableCardId) {
      editCard({ ...completedCardInput, id: editableCardId, updatedAt: new Date() })
    } else {
      addCard(completedCardInput)
    }
    resetCardInput()
    onClickConfirm()
  }

  return (
    <Flex width="100%" height="100vh" direction="column">
      <Flex direction="column" justifyContent="center" alignItems="center" marginTop="auto">
        <Text as="h1" variant="heading1" marginBottom="48px">
          카드등록이 완료되었습니다.
        </Text>
        <Card
          cardSize="lg"
          cardCode={cardCode}
          cardExpDate={cardExpDate}
          cardName={cardName}
          cardType={cardType}
          marginBottom="24px"
        />
        <UnderlineInput
          width="240px"
          placeholder="카드 별칭(선택)"
          contentAlign="center"
          maxLength={10}
          value={cardNickName}
          onChange={e => setCardInput('cardNickName')(e.target.value)}
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
