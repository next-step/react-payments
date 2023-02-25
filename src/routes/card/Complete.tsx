import styled from "styled-components";
import Card from "../../components/Card";
import Button from "../../components/Form/Button";
import { CardContext } from "../../components/CardProvider";
import { useContext } from "react";

function CardList() {
  const cardContext = useContext(CardContext);
  console.log(cardContext);

  return (
    <Wrapper>
      <TextWrapper>
        <Title>완료페이지</Title>
      </TextWrapper>
      {/* <Card/> */}
      <Button />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2`
  font-weight: 500;
  font-size: 20px;
  line-height: 22px;
  display: flex;
  align-items: center;
  color: #383838;
  margin-bottom: 2.5rem;
`;

export default CardList;
