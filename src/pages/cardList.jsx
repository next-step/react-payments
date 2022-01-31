import React, { useContext } from "react";
import styled from "styled-components";
import { CardContext } from "../Payments";
import Title from "../components/Title";
import CompletedCard from "../components/CompletedCard";

function CardList() {
  const { cards } = useContext(CardContext);

  return (
    <Root>
      <App flexColumnCenter>
        <FlexCenter>
          <Title marginBottom="2.5rem">보유 카드</Title>
        </FlexCenter>
        {cards.map((card, index) => (
          <React.Fragment key={index}>
            <CompletedCard completedCard={card} small smallChip />
            <span>법인카드</span>
          </React.Fragment>
        ))}
        <CardBox>
          <EmptyCard>+</EmptyCard>
        </CardBox>
      </App>
    </Root>
  );
}

export default CardList;

const Root = styled.div`
  background-color: #fff;
  width: 375px;
  min-width: 375px;
  height: 700px;
  position: relative;
  border-radius: 15px;
`;

const App = styled.div`
  height: 100%;
  padding: 16px 24px;
  ${(props) =>
    props.flexColumnCenter &&
    `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `}
`;

const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
`;

const EmptyCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 208px;
  height: 130px;
  font-size: 30px;
  color: #575757;
  background: #e5e5e5;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  user-select: none;
`;
