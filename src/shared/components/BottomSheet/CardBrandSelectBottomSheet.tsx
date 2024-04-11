import { CardBrand } from '@/card';
import { BottomSheet, Button, Circle, styleToken, Typography, VStack } from '@/shared';

type CardBrandSelectBottomSheetProps = {
  close: () => void;
  onCardBrandClick?: (cardBrand: CardBrand) => void;
  values: CardBrand[];
};

export const CardBrandSelectBottomSheet = ({ values, close, onCardBrandClick }: CardBrandSelectBottomSheetProps) => {
  const sliceValues = values.slice(0, 8);

  return (
    <BottomSheet>
      {sliceValues.map(({ label, color }) => (
        <CardBrandSelectButton
          key={`card-select-${label}`}
          color={color}
          label={label}
          onClick={() => {
            onCardBrandClick?.({ label, color });
            close();
          }}
        />
      ))}
    </BottomSheet>
  );
};

type CardSelectButtonProps = {
  onClick: () => void;
} & CardBrand;

const CardBrandSelectButton = ({ color, label, ...props }: CardSelectButtonProps) => (
  <Button variant="ghost" backgroundColor={styleToken.color.white} width="100%" padding="0" {...props}>
    <VStack width="100%" justifyContent="center" alignItems="center" spacing="10px">
      <Circle backgroundColor={color} width="36px" height="36px" />
      <Typography variant="caption" color={styleToken.color.black}>
        {label}
      </Typography>
    </VStack>
  </Button>
);

CardBrandSelectBottomSheet.displayName = 'CardBrandSelectBottomSheet';
