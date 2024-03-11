import { Box } from '@/shared/components/atoms/Box';
import { Text } from '@/shared/components/atoms/Text';

interface Props {
  companyName: string;
  cardName: string;
  MM: number;
  YY: number;
}

export const CardInputDisplay = ({ companyName, cardName, MM, YY }: Props) => {
  return (
    <Box className={'card-box'}>
      <Box className={'empty-card'}>
        <Box className={'card-top'}>{companyName}</Box>
        <Box className={'card-middle'}>
          <Box className="small-card__chip" />
        </Box>
        <Box className={'card-bottom'}>
          <Box className={'card-bottom__info'}>
            <Text className={'card-text'}>{cardName}</Text>
            <Text className={'card-text'}>
              {MM} / {YY}
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
