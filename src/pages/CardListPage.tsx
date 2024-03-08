import { AppLayout, CardDisplay, useCard, useFunnel } from '@/components';
import { Typography, VStack } from '@/shared/components';

export const CardListPage = () => {
  const { ownerCards, resetCurrentCard } = useCard();
  const { goToNext } = useFunnel();

  const moveCardAddPage = () => {
    resetCurrentCard();
    goToNext();
  };

  return (
    <>
      <AppLayout.Header>
        <Typography as="h1" variant="headline" padding="10px 0" margin="0">
          보유 카드
        </Typography>
      </AppLayout.Header>
      <AppLayout.Body>
        <VStack spacing="20px" padding="20px 0">
          {ownerCards.map((ownerCard, index) => (
            <VStack key={`card-list-${index}`} spacing="10px" alignItems="center" justifyContent="center">
              <CardDisplay size="small" {...ownerCard} />
              <Typography variant="body" textAlign="center">
                {ownerCard.description}
              </Typography>
            </VStack>
          ))}
        </VStack>
      </AppLayout.Body>
      <AppLayout.Footer height="300px">
        <VStack paddingTop="20px" alignItems="center">
          <CardDisplay.Add onClick={moveCardAddPage} />
        </VStack>
      </AppLayout.Footer>
    </>
  );
};
