import { Box } from 'components/@common';
import * as Styled from './CreditCard.styles';

const CreditCard = () => {
  return (
    <Styled.Wrapper>
      <Styled.Name>포코 카드</Styled.Name>
      <Styled.Chip />
      <Styled.Number>1111-2222-****-****</Styled.Number>
      <Styled.FlexWrapper
        display="flex"
        alignItems="flex-end"
        justifyContent="space-between"
      >
        <Styled.HolderName>
          카드 소유자 30글자까지 가능하다.30글자까지 가능하다!!
        </Styled.HolderName>
        <Styled.Expiration>01/23</Styled.Expiration>
      </Styled.FlexWrapper>
    </Styled.Wrapper>
  );
};

export default CreditCard;
