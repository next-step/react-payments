import Text from 'components/common/Text/Text';
import styled from 'styled-components';
import Card from 'components/common/Card/Card';

import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { CardType } from 'types';
import { PaymentsContext } from 'context/Payments';

const MyCardListPage = () => {
  const navigate = useNavigate();
  const payMentsCtx = useContext(PaymentsContext);

  const myCardList = [...payMentsCtx.cardList].reverse();

  const handleAddCard = () => {
    navigate('/add');
  };

  return (
    <Layout>
      <Title fontSize="xl" weight="bold" label="보유카드" />
      <ScrollContainer>
        <StyledAddCard type="add" size="small" onClick={handleAddCard} />
        {myCardList.map((card: CardType) => (
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
const ScrollContainer = styled.div`
  height: 80vh;
  padding: 30px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 10px;
    opacity: 0;
  }
  &::-webkit-scrollbar-thumb {
    height: 5%;
    background: #636266;
    border-radius: 7px;
  }
  // 파이어폭스
  scrollbar-width: thin;
  scrollbar-color: #636266;
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
