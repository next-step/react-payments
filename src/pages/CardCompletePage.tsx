import { ChangeEvent, useState } from 'react';
import { AppLayout, CardDisplay, useCard, useFunnel } from '@/components';
import { Button, HStack, TextField, Typography, VStack } from '@/shared/components';
import { removeAllSpaces } from '@/shared/utils';

const CARD_DESCRIPTION_MAX_LENGTH = 20;

export const CardCompletePage = () => {
  const { goToNext } = useFunnel();
  const { card, addCardToOwner } = useCard();
  const {
    label: cardBrandLabel,
    color: cardBrandColor,
    cardNumber,
    expirationDate: cardExpirationDate,
    ownerName: cardOwnerName,
  } = card;

  const [cardDescription, setCardDescription] = useState('');
  const handleCardDescriptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCardDescription(e.target.value.trim());
  };
  const isValidateCardDescription = removeAllSpaces(cardDescription).length > 0;

  const handleCardCreateSubmit = () => {
    addCardToOwner({
      ...card,
      description: cardDescription,
    });
    goToNext();
  };

  return (
    <>
      <AppLayout.Header />
      <AppLayout.Body>
        <VStack spacing="20px" marginTop="20px">
          <Typography variant="headline" textAlign="center" margin="40px 0">
            카드 등록이 완료되었습니다.
          </Typography>
          <VStack justifyContent="center" alignItems="center">
            <CardDisplay
              size="big"
              label={cardBrandLabel}
              color={cardBrandColor}
              cardNumber={cardNumber}
              expirationDate={cardExpirationDate}
              ownerName={cardOwnerName}
            />
          </VStack>
          <HStack padding="0 40px">
            <TextField
              variant="flushed"
              maxLength={CARD_DESCRIPTION_MAX_LENGTH}
              autoFocus
              onChange={handleCardDescriptionChange}
              textAlign="center"
            />
          </HStack>
        </VStack>
      </AppLayout.Body>
      <AppLayout.Footer>
        <HStack justifyContent="flex-end">
          {isValidateCardDescription && (
            <Button variant="ghost" color="teal" fontSize="100px" onClick={handleCardCreateSubmit}>
              완료
            </Button>
          )}
        </HStack>
      </AppLayout.Footer>
    </>
  );
};
