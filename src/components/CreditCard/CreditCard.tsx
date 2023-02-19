import * as Styled from './CreditCard.styles';
import type { CreditCardProps } from './CreditCard.types';

const CreditCard = ({
  color,
  name,
  number,
  holderName,
  expiration,
}: CreditCardProps) => {
  return (
    <Styled.Wrapper color={color}>
      <Styled.Name>{name}</Styled.Name>
      <Styled.Chip />
      <Styled.Number>{number}</Styled.Number>
      <Styled.FlexWrapper
        display="flex"
        alignItems="flex-end"
        justifyContent="space-between"
      >
        <Styled.HolderName>{holderName}</Styled.HolderName>
        <Styled.Expiration>{expiration}</Styled.Expiration>
      </Styled.FlexWrapper>
    </Styled.Wrapper>
  );
};

export default CreditCard;
