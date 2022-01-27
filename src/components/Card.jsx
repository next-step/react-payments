import styled from "styled-components";

function Card({
  cardNumberSeries,
  cardNumberCompany,
  cardNumberIndividual,
  cardNumberCode,
  name,
  dueMonth,
  dueYear,
}) {
  return (
    <CardBox>
      <EmptyCard>
        <CardTop />
        <CardMiddle>
          <SmallCardChip />
        </CardMiddle>
        <CardBottom>
          <CardBottomNumber>
            <CardText>
              {cardNumberSeries}&nbsp;{cardNumberCompany}&nbsp;
              {cardNumberIndividual}&nbsp;
              {cardNumberCode}
            </CardText>
          </CardBottomNumber>
          <CardBottomInfo>
            <CardText>{name.length === 0 ? "NAME" : name}</CardText>
            <CardText>
              {dueMonth} {dueMonth && "/"} {dueYear}
            </CardText>
          </CardBottomInfo>
        </CardBottom>
      </EmptyCard>
    </CardBox>
  );
}

export default Card;

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

const CardText = styled.span`
  margin: 0 16px;
  font-size: 14px;
  line-height: 16px;
  vertical-align: middle;
  font-weight: 400;
`;
