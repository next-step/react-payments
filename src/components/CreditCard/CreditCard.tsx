import * as Styled from './CreditCard.styles';
import type { CreditCardProps } from './CreditCard.types';

import { maskLastEight } from 'utils/format';

const CreditCard = ({
  color,
  name,
  number,
  holderName,
  expiration,
}: CreditCardProps) => {
  return (
    <Styled.Wrapper color={color}>
      <Styled.SmallText>{name}</Styled.SmallText>
      <Styled.CardChip />
      <Styled.NumberText>{maskLastEight(number)}</Styled.NumberText>
      <Styled.FlexWrapper
        display="flex"
        alignItems="flex-end"
        justifyContent="space-between"
      >
        <Styled.Text>{holderName}</Styled.Text>
        <Styled.Text>{expiration}</Styled.Text>
      </Styled.FlexWrapper>
    </Styled.Wrapper>
  );
};

export default CreditCard;
