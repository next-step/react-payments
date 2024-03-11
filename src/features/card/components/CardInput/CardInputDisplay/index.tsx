import { CardInputInterface } from '@/features/card/types/cardInputTypes';
import { formattedDisplayCardNumber } from '@/features/utils/formattedString';
import { Box } from '@/shared/components/atoms/Box';
import { Text } from '@/shared/components/atoms/Text';
import { useMemo } from 'react';

interface Props {
  companyName: CardInputInterface['companyName'];
  cardName: CardInputInterface['cardName'];
  cardNumber: CardInputInterface['cardNumber'];
  expirationDate: CardInputInterface['expirationDate'];
}

export const CardInputDisplay = ({ companyName, cardName, cardNumber, expirationDate }: Props) => {
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
            <Text className={'card-text'}>{cardName || 'NAME'}</Text>
            <Text className={'card-text'}>
              {expirationDate.MM || 'MM'} / {expirationDate.YY || 'YY'}
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
