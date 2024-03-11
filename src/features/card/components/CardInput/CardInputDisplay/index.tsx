import { Box } from '@/shared/components/atoms/Box';
import { Text } from '@/shared/components/atoms/Text';

interface Props {
  companyName: string;
  cardName: string;
  cardNumber: string;
  expirationDate: {
    MM: string;
    YY: string;
  };
}

export const CardInputDisplay = ({ companyName, cardName, cardNumber, expirationDate }: Props) => {
  return (
    <Box className={'card-box'}>
      <Box className={'empty-card'}>
        <Box className={'card-top'}>{companyName}</Box>
        <Box className={'card-middle'}>
          <Box className="small-card__chip">{cardNumber}</Box>
        </Box>
        <Box className={'card-bottom'}>
          <Box className={'card-bottom__info'}>
            <Text className={'card-text'}>{cardName}</Text>
            <Text className={'card-text'}>
              {expirationDate.MM} / {expirationDate.YY}
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
