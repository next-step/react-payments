import { ChangeEvent, useState } from 'react';
import { CardDisplay, useCard } from '@/card';
import { AppLayout, Button, HStack, TextField, Typography, VStack, removeAllSpaces, useFunnel } from '@/shared';

const CARD_DESCRIPTION_MAX_LENGTH = 10;

export const CardCompletePage = () => {
  const { goToNext } = useFunnel();
  const { card, addCardToOwner } = useCard();
  const {
    label: cardBrandName,
    color: cardBrandColor,
    cardNumber,
    expirationDate: cardExpirationDate,
    ownerName: cardOwnerName,
  } = card;

  const [cardDescriptionInputValue, setCardDescriptionInputValue] = useState('');
  const handleCardDescriptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCardDescriptionInputValue(e.target.value.trim());
  };

  const handleCardCreateSubmit = () => {
    const description = removeAllSpaces(cardDescriptionInputValue) ? cardDescriptionInputValue : cardBrandName;
    addCardToOwner({
      ...card,
      description,
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
              label={cardBrandName}
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
          <Button variant="solid" color="teal" fontSize="100px" onClick={handleCardCreateSubmit}>
            완료
          </Button>
        </HStack>
      </AppLayout.Footer>
    </>
  );
};
