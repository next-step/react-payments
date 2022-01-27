import styled from "styled-components";
import Title from "../components/Title";

function CardList() {
  return (
    <div className="root">
      <div className="app flex-column-center">
        <div className="flex-center">
          <Title marginBottom="2.5rem">보유 카드</Title>
        </div>
        <CardBox>
          <div className="small-card">
            <CardTop>
              <CardText>클린카드</CardText>
            </CardTop>
            <CardMiddle>
              <SmallCardChip />
            </CardMiddle>
            <CardBottom>
              <CardBottomNumber>
                <CardText>1111 - 2222 - oooo - oooo</CardText>
              </CardBottomNumber>
              <CardBottomInfo>
                <CardText>YUJO</CardText>
                <CardText>12 / 23</CardText>
              </CardBottomInfo>
            </CardBottom>
          </div>
        </CardBox>
        <span className="card-nickname">법인카드</span>
        <CardBox>
          <EmptyCard>+</EmptyCard>
        </CardBox>
      </div>
    </div>
  );
}

export default CardList;

const CardBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
`;

const CardTop = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const CardMiddle = styled.div`
  width: 100%;
  height: 100%;
  margin-left: 30px;
  display: flex;
  align-items: center;
`;

const SmallCardChip = styled.div`
  width: 40px;
  height: 26px;
  left: 95px;
  top: 122px;
  background: #cbba64;
  border-radius: 4px;
`;

const CardBottom = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardBottomNumber = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardBottomInfo = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
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

const CardText = styled.span`
  margin: 0 16px;
  font-size: 14px;
  line-height: 16px;
  vertical-align: middle;
  font-weight: 400;
`;
