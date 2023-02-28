import Text from "components/Text/Text";
import styled from "styled-components";
import ADDCard from "components/Card/Card";
import Card from "components/Card/Card";

import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CardContext } from "context/Card/CardContext";
import { CardType } from "types";
import ScrollBox from "components/ScrollBox/ScrollBox";

const MyCardListPage = () => {
  const navigate = useNavigate();
  const cardCtx = useContext(CardContext);
  const MyCardList = [...cardCtx.state.list].reverse();

  const handleAddCard = () => {
    navigate("/add");
  };

  return (
    <Layout>
      <Title fontSize="2x" weight="bold" label="보유카드" />
      <ScrollContainer color="#636266">
        <StyledAddCard type="add" size="small" onClick={handleAddCard} />
        {MyCardList.map((card: CardType) => (
          <CardLayout key={card.id}>
            <Card
              type="primary"
              id={card.id}
              color={card.color}
              company={card.company}
              size="small"
              number={card.cardNumbers}
              expireMonth={card.expireDate.month}
              expireYear={card.expireDate.year}
              ownerName={card.ownerName}
            />
            <Text fontSize="m" weight="bold" label={card.alias} key={card.id} />
          </CardLayout>
        ))}
      </ScrollContainer>
    </Layout>
  );
};
export default MyCardListPage;
const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ScrollContainer = styled(ScrollBox)`
  padding: 30px;
  height: 80vh;
`;
const StyledAddCard = styled(Card)`
  margin-bottom: 30px;
`;
const Title = styled(Text)`
  margin: 20px;
  display: block;
`;
const CardLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  gap: 20px;
`;
