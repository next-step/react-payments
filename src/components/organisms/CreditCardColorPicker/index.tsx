import { Box, Button, Text } from '@/components/atoms';
import BottomSheet from '@/components/molecules/BottomSheet';
import { useCardOption } from '@/components/pages/CardForm/useCardOption';
import { ComponentProps, forwardRef } from 'react';

export const availableCreditCards = [
  { label: '포코 카드', bgColor: 'bg-red-500' },
  { label: '준 카드', bgColor: 'bg-blue-500' },
  { label: '현석 카드', bgColor: 'bg-green-500' },
  { label: '윤효 카드', bgColor: 'bg-pink-500' },
  { label: '환오 카드', bgColor: 'bg-yellow-500' },
  { label: '태은 카드', bgColor: 'bg-orange-500' },
  { label: '준일 카드', bgColor: 'bg-violet-500' },
  { label: '은규 카드', bgColor: 'bg-purple-500' },
] as const;

interface Props extends ComponentProps<'div'> {
  onSubmit: () => void;
}

const CreditCardColorPicker = forwardRef<HTMLDivElement, Props>(({ onSubmit, ...restProps }, ref) => {
  const { updateCardCompany } = useCardOption();

  return (
    <BottomSheet {...restProps} ref={ref}>
      <Box className="grid grid-cols-4 gap-3">
        {availableCreditCards.map((card) => (
          <Button
            onClick={() => {
              updateCardCompany(card.label);
              onSubmit();
            }}
            key={card.label}
            className={`justify-self-center`}
          >
            <Box className={`w-16 h-16 ${card.bgColor} rounded-full`} role="presentation" />
            <Text size="sm" className="block mt-2">
              {card.label}
            </Text>
          </Button>
        ))}
      </Box>
    </BottomSheet>
  );
});

export default CreditCardColorPicker;
