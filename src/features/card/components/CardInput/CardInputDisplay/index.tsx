import { DISPLAY_MAX_LENGTH_CARD_OWNER_NAME } from '@/features/card/constants/display';
import { CardInputInterface } from '@/features/card/types/cardInputTypes';
import { formattedDisplayCardNumber } from '@/features/card/utils/formattedString';
import { Box } from '@/shared/components/atoms/Box';
import { Text } from '@/shared/components/atoms/Text';
import { useMemo } from 'react';

interface Props {
  companyName: CardInputInterface['companyName'];
  ownerName: CardInputInterface['ownerName'];
  cardNumber: CardInputInterface['cardNumber'];
  expirationDate: CardInputInterface['expirationDate'];
}

export const CardInputDisplay = ({ companyName, ownerName, cardNumber, expirationDate }: Props) => {
  const displayCardNumber = useMemo(() => formattedDisplayCardNumber(cardNumber), [cardNumber]);

  return (
    <Box className={'card-box'}>
      <Box className={'empty-card'}>
        <Box className={'card-top'}>{companyName}</Box>
        <Box className={'card-middle'}>
          <Box className="small-card__chip" />
        </Box>
        <Box className={'card-bottom'}>
          <Box className={'card-bottom__number'}>
            <Text className={'card-text'}>{displayCardNumber}</Text>
          </Box>
          <Box className={'card-bottom__info'}>
            <Text className={'card-text'}>
              {ownerName.slice(0, DISPLAY_MAX_LENGTH_CARD_OWNER_NAME) || 'NAME'}
            </Text>
            <Text className={'card-text'}>
              {expirationDate.MM || 'MM'} / {expirationDate.YY || 'YY'}
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
