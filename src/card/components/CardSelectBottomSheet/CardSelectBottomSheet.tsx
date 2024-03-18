import type { CardBrand } from '@/card';
import { CARD_BRANDS } from '@/card';
import { Backdrop, Button, Circle, Grid, Typography, VStack, styleToken } from '@/shared';

type CardSelectButtonProps = {
  onClick: () => void;
} & CardBrand;

type CardSelectBottomSheetProps = {
  opened: boolean;
  onOverlayClick?: () => void;
  onCardBrandClick?: (cardBrand: CardBrand) => void;
};

const CardSelectButton = ({ color, label, ...props }: CardSelectButtonProps) => (
  <Button variant="ghost" backgroundColor={styleToken.color.white} width="100%" padding="0" {...props}>
    <VStack width="100%" justifyContent="center" alignItems="center" spacing="10px">
      <Circle backgroundColor={color} width="36px" height="36px" />
      <Typography variant="caption" color={styleToken.color.black}>
        {label}
      </Typography>
    </VStack>
  </Button>
);

export const CardSelectBottomSheet = ({ opened, onOverlayClick, onCardBrandClick }: CardSelectBottomSheetProps) =>
  opened ? (
    <Backdrop onClick={onOverlayClick}>
      <VStack
        position="absolute"
        bottom="0"
        left="0"
        width="100%"
        height="230px"
        backgroundColor="white"
        borderRadius="5px 5px 15px 15px"
      >
        <Grid
          gridTemplateColumns="repeat(4, 1fr)"
          alignItems="center"
          justifyContent="center"
          height="100%"
          padding="20px 20px"
        >
          {CARD_BRANDS.map(({ label, color }) => (
            <CardSelectButton
              key={`card-select-${label}`}
              color={color}
              label={label}
              onClick={() => {
                onCardBrandClick?.({ label, color });
              }}
            />
          ))}
        </Grid>
      </VStack>
    </Backdrop>
  ) : null;

CardSelectBottomSheet.displayName = 'CardSelectBottomSheet';
