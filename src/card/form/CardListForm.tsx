import Close from '@/assets/close.svg';
import { CardDisplay, CardPageIndex, CardState, useCard } from '@/card';
import { AppDisplay, Typography, VStack, useFunnel, Button, HStack, Flex } from '@/shared';

export const CardListForm = () => {
  const { ownerCards, setCard, resetCurrentCard, removeCardFromOwner } = useCard();
  const { goToNext, goToIndex } = useFunnel();

  const moveCardAddPage = () => {
    resetCurrentCard();
    goToNext();
  };

  const moveCardPaymentForm = () => {
    goToIndex(CardPageIndex.CardPayment);
  };

  const moveCardCompletePage = (card: CardState) => {
    setCard(card);
    goToIndex(CardPageIndex.CardComplete);
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
        <Flex flexDirection="row" alignItems="center" justifyContent="space-between">
          <Typography as="h1" variant="headline" padding="10px 0" margin="0">
            보유 카드
          </Typography>
          <Button variant="ghost" onClick={moveCardPaymentForm}>
            <img src={Close} alt="닫기 버튼" width="32px" height="32px" />
          </Button>
        </Flex>
      </AppDisplay.Header>
      <AppDisplay.Body maxHeight="438px" overflow="scroll">
        <VStack width="100%" spacing="20px" padding="20px 0">
          {ownerCardsDescending.map((ownerCard, index) => (
            <HStack
              key={`card-list-${ownerCard.cardNumber}-${index}`}
              width="100%"
              justifyContent="center"
              alignItems="center"
              spacing="10px"
              marginLeft="18px"
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
                <Typography variant="body">삭제</Typography>
              </Button>
            </HStack>
          ))}
        </VStack>
      </AppDisplay.Body>
      <AppDisplay.Footer>
        <VStack paddingTop="20px" alignItems="center">
          <CardDisplay.Add onClick={moveCardAddPage} />
        </VStack>
      </AppDisplay.Footer>
    </>
  );
};
