import * as Styled from './CreditCard.styles';
import type { CreditCardProps } from './CreditCard.types';

import { CardCompanies } from 'constants/Card';
import { maskLastEight } from 'utils/format';
import { ThemeKeys } from 'styles/theme';

const findCardDefaultName = (color: ThemeKeys) => {
  const result = Object.entries(CardCompanies).find(
    ([_, value]) => value === color
  );
  return result && result[0];
};

const CreditCard = ({
  color,
  name,
  number,
  holderName,
  expiration,
}: CreditCardProps) => {
  return (
    <Styled.Wrapper color={color}>
      <Styled.SmallText>{name || findCardDefaultName(color)}</Styled.SmallText>
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
