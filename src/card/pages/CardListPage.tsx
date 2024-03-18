import { CardDisplay, CardPageIndex, CardState, useCard } from '@/card';
import { AppDisplay, Typography, VStack, useFunnel, Button, HStack } from '@/shared';

export const CardListPage = () => {
  const { ownerCards, setCard, resetCurrentCard, removeCardFromOwner } = useCard();
  const { goToNext, goToIndex } = useFunnel();

  const moveCardAddPage = () => {
    resetCurrentCard();
    goToNext();
  };

  const moveCardCompletePage = (card: CardState) => {
    setCard(card);
    goToIndex(CardPageIndex.CardCompletePage);
  };

  const onRemoveCardClick = (card: CardState) => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      removeCardFromOwner(card);
    }
  };

  const ownerCardsDescending = ownerCards.sort((a, b) => b.createdTimestamp - a.createdTimestamp);

  return (
    <>
      <AppDisplay.Header>
        <Typography as="h1" variant="headline" padding="10px 0" margin="0">
          보유 카드
        </Typography>
      </AppDisplay.Header>
      <AppDisplay.Body>
        <VStack width="100%" spacing="20px" padding="20px 0">
          {ownerCardsDescending.map((ownerCard, index) => (
            <HStack
              key={`card-list-${ownerCard.cardNumber}-${index}`}
              width="100%"
              justifyContent="center"
              alignItems="center"
              spacing="10px"
            >
              <VStack spacing="10px" alignItems="center" justifyContent="center">
                <CardDisplay size="small" {...ownerCard} onClick={() => moveCardCompletePage(ownerCard)} />
                <Typography variant="body" textAlign="center">
                  {ownerCard.description}
                </Typography>
              </VStack>
              <Button
                variant="ghost"
                colorScheme="gray"
                width="auto"
                padding="0"
                margin="0 0 20px 10px"
                backgroundColor="unset"
                onClick={() => onRemoveCardClick(ownerCard)}
              >
                삭제
              </Button>
            </HStack>
          ))}
        </VStack>
      </AppDisplay.Body>
      <AppDisplay.Footer height="300px">
        <VStack paddingTop="20px" alignItems="center">
          <CardDisplay.Add onClick={moveCardAddPage} />
        </VStack>
      </AppDisplay.Footer>
    </>
  );
};
