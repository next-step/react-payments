import Text from "components/Text";
import styled from "styled-components";
import ADDCard from "components/Card";
import Card from "components/Card";

import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CardContext } from "context/Card";
import { NewCardType } from "types";

const MyCardListPage = () => {
  // context api value에 있는 카드 리스트 값을 가져와서 렌더링한다.
  const cardCtx = useContext(CardContext);
  const MyCardList = [...cardCtx.state.list].reverse();

  const navigate = useNavigate();
  const handleAddCard = () => {
    // add 버튼을 누르면 카드 추가 페이지를 보여준다.
    navigate("/add");
  };

  return (
    <Layout>
      <Title fontSize="2x" weight="bold" label="보유카드" />
      {MyCardList.map((card: NewCardType) => (
        <CardLayout>
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
          <Text fontSize="m" weight="bold" label={card.alias} />
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
