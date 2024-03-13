import { Box, Text } from '@/components/atoms';
import { availableCreditCards } from '../CreditCardCompanyPicker';

interface Props {
  cardNumber: string;
  expirationMonth: string;
  expirationYear: string;
  ownerName: string;
  cardCompany: string;
}

export default function CreditCard({ cardNumber, expirationMonth, expirationYear, ownerName, cardCompany }: Props) {
  const getBgColor = (cardCompany: string) => {
    const card = availableCreditCards.find((card) => card.label === cardCompany);
    return card?.bgColor;
  };

  return (
    <Box
      className={`flex flex-col justify-between w-[208px] h-[130px] rounded-md shadow-md select-none py-2 px-3 ${
        getBgColor(cardCompany) ?? 'bg-lime-300'
      }`}
    >
      <Text size="xs">{cardCompany}</Text>
      <Box className="space-y-1">
        <Box className="w-10 h-6 rounded-sm bg-[#cbba64]" />
        <Text size="sm">{cardNumber}</Text>
        <Box className="flex justify-between">
          <Text size="sm" className="card-text">
            {ownerName}
          </Text>
          <Text size="sm" className="card-text">
            {expirationMonth} / {expirationYear}
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
