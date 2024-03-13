import { Card, Flex, Text, Header, Box } from '@/components'
import { IconPlus, IconTrash } from '@tabler/icons-react'
import { CardState, useCardState } from '@/hooks/use-card-state'
import { vars } from '@/styles'
import { useCardInputContext } from '@/contexts'

export interface CardListStepProps {
  cardList: CardState[]
  onNavigateToRegister: () => void
  onNavigateToEdit?: (id: CardState['id']) => void
  onClickRemoveButton: (targetId: string) => void
}

export const CardListStep = ({
  cardList,
  onNavigateToRegister,
  onNavigateToEdit,
  onClickRemoveButton,
}: CardListStepProps) => {
  const { resetCardInput } = useCardInputContext()
  // const { cardList, removeCard } = useCardState()

  const handleStartEditCard = (card: CardState) => () => {
    resetCardInput(card)
    onNavigateToEdit?.(card.id)
  }

  const handleClickRemoveCardButton = (id: string) => () => {
    console.log('remove id : ', id)
    onClickRemoveButton(id)
  }

  return (
    <Flex
      direction="column"
      height="100vh"
      alignItems="center"
      justifyContent="center"
      width="100%"
    >
      <Header title="보유카드" />
      <Flex
        width="100%"
        height="100%"
        direction="column"
        gap="24px"
        justifyContent="center"
        alignItems="center"
        paddingX="40px"
      >
        {cardList
          .sort((card1, card2) => card2.updatedAt.getTime() - card1.updatedAt.getTime())
          .map(card => {
            const { id, cardCode, cardName, cardExpDate, cardType, cardNickName } = card
            return (
              <Flex key={id} direction="column" alignItems="center">
                <Card
                  cardSize="lg"
                  cardCode={cardCode}
                  cardName={cardName}
                  cardExpDate={cardExpDate}
                  cardType={cardType}
                  marginBottom="8px"
                  onClick={handleStartEditCard(card)}
                />
                <Flex alignItems="center" gap="8px">
                  <Text variant="body2">{cardNickName}</Text>
                  <Box as="button">
                    <IconTrash
                      size={24}
                      color={vars.color.gray500}
                      onClick={handleClickRemoveCardButton(id)}
                    />
                  </Box>
                </Flex>
              </Flex>
            )
          })}
        <Flex
          as="button"
          width="300px"
          borderRadius="4px"
          backgroundColor="gray100"
          color="gray500"
          justifyContent="center"
          alignItems="center"
          aspectRatio="3/2"
          onClick={onNavigateToRegister}
        >
          <IconPlus size={24} />
        </Flex>
      </Flex>
    </Flex>
  )
}
