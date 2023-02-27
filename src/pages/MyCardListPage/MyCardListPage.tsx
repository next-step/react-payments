import Text from "components/Text/Text";
import styled from "styled-components";
import ADDCard from "components/Card/Card";
import Card from "components/Card/Card";

import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CardContext } from "context/Card/CardContext";
import { NewCardType } from "types";

const MyCardListPage = () => {
  const navigate = useNavigate();
  const cardCtx = useContext(CardContext);
  const MyCardList = [...cardCtx.state.list].reverse();

  const handleAddCard = () => {
    navigate("/add");
  };

  const handleCard = (e) => {
    const cardId = e.currentTarget.dataset.id as string;
    const selectedCard = MyCardList.find((card: NewCardType) => card.id === cardId);
    if (!selectedCard) return alert("현재 선택한 카드가 리스트에 존재하지 않습니다");
    cardCtx.removeCard(selectedCard);
    cardCtx.addCardToStore(selectedCard);
    navigate("/complete");
  };

  return (
    <Layout>
      <Title fontSize="2x" weight="bold" label="보유카드" />
      {MyCardList.map((card: NewCardType) => (
        <CardLayout key={card.id} data-id={card.id} onClick={handleCard}>
          <Card
            type="primary"
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

      <ADDCard type="add" size="small" onClick={handleAddCard} />
    </Layout>
  );
};
export default MyCardListPage;
const Layout = styled.div`
  display: flex;
  margin: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

// styled component 상속되게 하는방법 찾아보기
const Title = styled(Text)`
  margin: 10px;
  display: block;
`;
const CardLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
