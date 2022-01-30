import styled from "styled-components";

function CompletedCard({ completedCard }) {
  return (
    <CardBox>
      <BigCard>
        <CardTop>
          <CardTextBig>클린카드</CardTextBig>
        </CardTop>
        <CardMiddle>
          <BigCardChip />
        </CardMiddle>
        <CardBottom>
          <CardBottomNumber>
            <CardTextBig>{`${
              completedCard?.cardNumberSeries
                ? completedCard.cardNumberSeries
                : "1111"
            } - ${
              completedCard?.cardNumberCompany
                ? completedCard.cardNumberCompany
                : "2222"
            } - **** - ****`}</CardTextBig>
          </CardBottomNumber>
          <CardBottomInfo>
            <CardTextBig>
              {completedCard?.name ? completedCard.name : "SUN"}
            </CardTextBig>
            <CardTextBig>{`${
              completedCard?.dueMonth ? completedCard.dueMonth : "04"
            } / ${
              completedCard?.dueYear ? completedCard.dueYear : "21"
            }`}</CardTextBig>
          </CardBottomInfo>
        </CardBottom>
      </BigCard>
    </CardBox>
  );
}

export default CompletedCard;

const CardBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
`;

const BigCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 290px;
  height: 180px;
  background: #94dacd;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`;

const CardTop = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const CardTextBig = styled.span`
  margin: 0 16px;
  font-size: 18px;
  line-height: 20px;
  vertical-align: middle;
  font-weight: 400;
`;

const CardMiddle = styled.div`
  width: 100%;
  height: 100%;
  margin-left: 30px;
  display: flex;
  align-items: center;
`;

const BigCardChip = styled.div`
  width: 55.04px;
  height: 35.77px;
  background: #cbba64;
  border-radius: 4px;
  font-size: 24px;
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
