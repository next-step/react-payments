import { AppLayout, CardDisplay, useCard, useFunnel } from '@/components';
import { Typography, VStack } from '@/shared/components';

export const CardListPage = () => {
  const { ownerCards, resetCurrentCard } = useCard();
  const { goToNext } = useFunnel();

  const handleCardAddPageMove = () => {
    resetCurrentCard();
    goToNext();
  };

  return (
    <>
      <AppLayout.Header>
        <Typography variant="headline">보유 카드</Typography>
      </AppLayout.Header>
      <AppLayout.Body>
        <VStack gap="20px" padding="20px 0">
          {ownerCards.map((ownerCard, index) => (
            <VStack key={`card-list-${index}`} gap="10px" alignItems="center" justifyContent="center">
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
          <CardDisplay.Add onClick={handleCardAddPageMove} />
        </VStack>
      </AppLayout.Footer>
    </>
  );
};
