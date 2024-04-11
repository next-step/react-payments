import { CardAddDisplay } from './CardAddDisplay';
import type { CardState } from '@/card/types';
import { Box, Button, Grid, HStack, Typography, VStack, styleToken, StyleProps, replaceMaskText } from '@/shared';

type CardSize = 'big' | 'small';
type CardTypographyVariant = 'headline' | 'body';
type CardDisplayProps = {
  size: CardSize;
  onClick?: () => void;
} & Record<keyof Omit<CardState, 'securityCode' | 'password' | 'description' | 'createdTimestamp'>, string>;

export const CardDisplay = ({
  size,
  label,
  color = styleToken.color.body,
  cardNumber,
  expirationDate,
  ownerName,
  onClick,
}: CardDisplayProps) => {
  const { cardDisplayProps, cardChipProps, typographyVariant, maskFontSize } = getCardStyles(size);
  const [expirationMonth, expirationYear] = expirationDate.split(' ');

  return (
    <Button onClick={onClick} padding="0">
      <VStack
        color={styleToken.color.gray600}
        backgroundColor={color}
        borderRadius="5px"
        padding="10px 14px"
        spacing="0"
        {...cardDisplayProps}
      >
        <Box width="100%" textAlign="left">
          <Box height="24px">{label && <Typography variant="body">{label}</Typography>}</Box>
          <Box backgroundColor={styleToken.color.mustard} borderRadius="4px" {...cardChipProps} />
        </Box>
        <VStack alignItems="center" justifyContent="space-between" width="100%" flexGrow={1}>
          <Box width="100%" />
          <CardNumberDisplay cardNumber={cardNumber} variant={typographyVariant} maskFontSize={maskFontSize} />
          <CardOwnerDisplay
            ownerName={ownerName}
            variant={typographyVariant}
            expirationMonth={expirationMonth || 'MM'}
            expirationYear={expirationYear || 'YY'}
          />
        </VStack>
      </VStack>
    </Button>
  );
};

const CardNumberDisplay = ({
  cardNumber,
  variant,
  maskFontSize,
}: {
  cardNumber: CardDisplayProps['cardNumber'];
  variant: CardTypographyVariant;
  maskFontSize: StyleProps['fontSize'];
}) => (
  <Grid gridTemplateColumns="repeat(4, 1fr)" width="100%" paddingLeft="20px">
    {cardNumber.split(' ').map((number, index) => {
      const isTextMaskIndex = index > 1;
      const text = isTextMaskIndex ? replaceMaskText(number) : number;

      return (
        <Typography
          key={`card-number-${index}`}
          variant={variant}
          textAlign="left"
          whiteSpace="nowrap"
          overflow="hidden"
          textOverflow="ellipsis"
          {...(isTextMaskIndex && { fontSize: maskFontSize })}
        >
          {text}
        </Typography>
      );
    })}
  </Grid>
);

const CardOwnerDisplay = ({
  ownerName,
  variant,
  expirationMonth,
  expirationYear,
}: {
  variant: CardTypographyVariant;
  ownerName: string;
  expirationMonth: string;
  expirationYear: string;
}) => (
  <HStack width="100%" justifyContent="space-between" spacing="10px">
    <Typography variant={variant} whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis" lineHeight={1}>
      {ownerName}
    </Typography>
    <HStack width="40px" justifyContent="flex-end" alignItems="center">
      <Typography variant={variant} lineHeight={1}>
        {expirationMonth}
      </Typography>
      <Typography variant={variant} lineHeight={1} textAlign="center">
        /
      </Typography>
      <Typography variant={variant} lineHeight={1}>
        {expirationYear}
      </Typography>
    </HStack>
  </HStack>
);

const getCardStyles = (size: CardSize) => {
  const cardDisplayProps = {
    width: size === 'big' ? '290px' : '208px',
    height: size === 'big' ? '180px' : '130px',
    fontSize: size === 'big' ? '24px' : '14px',
  };
  const cardChipProps = {
    width: size === 'big' ? '55px' : '40px',
    height: size === 'big' ? '36px' : '26px',
    marginTop: size === 'big' ? '24px' : '9px',
  };
  const typographyVariant: CardTypographyVariant = size === 'big' ? 'headline' : 'body';
  const maskFontSize = size === 'big' ? '14px' : '10px';

  return { cardDisplayProps, cardChipProps, typographyVariant, maskFontSize };
};

CardDisplay.displayName = 'CardDisplay';

CardDisplay.Root = CardDisplay;
CardDisplay.Add = CardAddDisplay;
