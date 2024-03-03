import { CardAddDisplay } from './CardAddDisplay';
import { Button, Grid, HStack, Typography, VStack } from '@/shared/components';
import { styleToken } from '@/shared/styles';
import { removeAllSpaces, replaceMaskText } from '@/shared/utils';
import { CardState } from '@/type';

type CardSize = 'big' | 'small';
type CardTypographyVariant = 'headline' | 'body';
type CardDisplayProps = {
  size: CardSize;
  onClick?: () => void;
} & Pick<CardState, 'label' | 'color' | 'cardNumber' | 'expirationDate' | 'ownerName'>;

export const CardDisplay = ({
  size,
  label,
  color,
  cardNumber,
  expirationDate,
  ownerName,
  onClick,
}: CardDisplayProps) => {
  const { cardDisplayProps, cardChipProps, typographyVariant, maskFontSize } = getCardStyles(size);
  const cardDateString = removeAllSpaces(expirationDate);
  const expirationMonth = cardDateString.slice(0, 2) || 'MM';
  const expirationYear = cardDateString.slice(2, 4) || 'YY';
  return (
    <Button onClick={onClick} padding="0">
      <VStack
        alignItems="center"
        justifyContent="center"
        color={styleToken.color.gray600}
        backgroundColor={color || styleToken.color.body}
        boxShadow={`3px 3px 5px ${styleToken.color.shadow}`}
        borderRadius="5px"
        padding="10px 14px"
        gap="0"
        {...cardDisplayProps}
      >
        <VStack width="100%">
          <VStack height="24px" alignItems="flex-start">
            {label && <Typography variant="body">{label}</Typography>}
          </VStack>
          <VStack backgroundColor={styleToken.color.mustard} borderRadius="4px" {...cardChipProps} />
        </VStack>
        <VStack alignItems="center" justifyContent="space-between" width="100%" flexGrow={1}>
          <VStack width="100%" />
          <CardNumberDisplay cardNumber={cardNumber} variant={typographyVariant} maskFontSize={maskFontSize} />
          <CardOwnerDisplay
            ownerName={ownerName}
            variant={typographyVariant}
            expirationMonth={expirationMonth}
            expirationYear={expirationYear}
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
  cardNumber: string;
  variant: CardTypographyVariant;
  maskFontSize: string;
}) => (
  <Grid gridTemplateColumns="repeat(4, 1fr)" width="100%" paddingLeft="20px">
    {cardNumber.split(' ').map((number, index) => {
      const isTextMaskIndex = index > 1;
      const text = isTextMaskIndex ? replaceMaskText(number) : number;
      return (
        <Typography
          key={`card-number-${index}`}
          variant={variant}
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
  <HStack width="100%" justifyContent="space-between" gap="10px">
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

CardDisplay.Root = CardDisplay;
CardDisplay.Add = CardAddDisplay;
CardDisplay.displayName = 'CardDisplay';
