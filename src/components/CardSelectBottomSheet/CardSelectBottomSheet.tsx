import styled from '@emotion/styled';
import { CARD_BRANDS } from '@/constant';
import { Button, Circle, Grid, Typography, VStack } from '@/shared/components';
import { styleToken } from '@/shared/styles';
import { CardBrand } from '@/type';

type CardSelectBottomSheetProps = {
  onOverlayClick?: () => void;
  onSubmit?: (cardBrand: CardBrand) => void;
};

export const CardSelectBottomSheet = ({ onOverlayClick, onSubmit }: CardSelectBottomSheetProps) => (
  <BackDrop onClick={onOverlayClick}>
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
              onSubmit?.({ label, color });
            }}
          />
        ))}
      </Grid>
    </VStack>
  </BackDrop>
);

type CardSelectButtonProps = {
  onClick: () => void;
} & CardBrand;

const CardSelectButton = ({ color, label, ...props }: CardSelectButtonProps) => (
  <Button variant="ghost" backgroundColor={styleToken.color.white} width="100%" padding="0" {...props}>
    <VStack width="100%" justifyContent="center" alignItems="center" gap="10px">
      <Circle backgroundColor={color} width="36px" height="36px" />
      <Typography variant="caption" color={styleToken.color.black}>
        {label}
      </Typography>
    </VStack>
  </Button>
);

const BackDrop = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  z-index: 10;
  transition: opacity 1s ease;
  top: 0;
  left: 0;
  background-color: ${styleToken.color.shadow};
`;

CardSelectBottomSheet.displayName = 'CardSelectBottomSheet';
