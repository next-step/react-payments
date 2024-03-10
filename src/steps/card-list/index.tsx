import { Card, Flex, Text, Header, Box } from '@/components'
import { IconPlus, IconTrash } from '@tabler/icons-react'
import { useCardState } from '@/hooks/use-card-state.tsx'
import { vars } from '@/styles'

export interface CardListStepProps {
  onClickRegister: () => void
}

export const CardListStep = ({ onClickRegister }: CardListStepProps) => {
  const { cardList, removeCard } = useCardState()

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
          .map(card => (
            <Flex direction="column" alignItems="center" key={card.id}>
              <Card
                cardSize="lg"
                cardCode={card.cardCode}
                cardName={card.cardName}
                cardExpDate={card.cardExpDate}
                cardType={card.cardType}
                marginBottom="8px"
              />
              <Flex alignItems="center" gap="8px">
                <Text variant="body2">{card.cardNickName}</Text>
                <Box as="button">
                  <IconTrash
                    size={24}
                    color={vars.color.gray500}
                    onClick={() => removeCard(card.id)}
                  />
                </Box>
              </Flex>
            </Flex>
          ))}
        <Flex
          as="button"
          width="300px"
          borderRadius="4px"
          backgroundColor="gray100"
          color="gray500"
          justifyContent="center"
          alignItems="center"
          aspectRatio="3/2"
          onClick={onClickRegister}
        >
          <IconPlus size={24} />
        </Flex>
      </Flex>
    </Flex>
  )
}
