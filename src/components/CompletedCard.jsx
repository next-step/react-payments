import styled from "styled-components";

function CompletedCard({ completedCard, size }) {
  return (
    <CardBox>
      <Card size={size}>
        <CardTop>
          <CardText size={size}>클린카드</CardText>
        </CardTop>
        <CardMiddle>
          <CardChip size={size} />
        </CardMiddle>
        <CardBottom>
          <CardBottomNumber>
            <CardText size={size}>{`${
              completedCard?.cardNumberSeries
                ? completedCard.cardNumberSeries
                : ""
            } - ${
              completedCard?.cardNumberCompany
                ? completedCard.cardNumberCompany
                : ""
            } - ${completedCard?.cardNumberIndividual ? "****" : ""} - ${
              completedCard?.cardNumberCode ? "****" : ""
            }`}</CardText>
          </CardBottomNumber>
          <CardBottomInfo>
            <CardText size={size}>
              {completedCard?.name ? completedCard.name : ""}
            </CardText>
            <CardText size={size}>{`${
              completedCard?.dueMonth ? completedCard.dueMonth : ""
            } / ${
              completedCard?.dueYear ? completedCard.dueYear : ""
            }`}</CardText>
          </CardBottomInfo>
        </CardBottom>
      </Card>
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

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${(props) => {
    if (props.size === "small")
      return `
        width: 208px;
        height: 130px;
      `;
    if (props.size === "big")
      return `
        width: 290px;
        height: 180px;
      `;
  }}
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

const CardText = styled.span`
  margin: 0 16px;
  ${(props) => {
    if (props.size === "small")
      return `
        font-size: 14px;
        line-height: 16px;
      `;
    if (props.size === "big")
      return `
        font-size: 18px;
        line-height: 20px;
      `;
  }}
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

const CardChip = styled.div`
  background: #cbba64;
  border-radius: 4px;
  ${(props) => {
    if (props.size === "small")
      return `
        width: 40px;
        height: 26px;
      `;
    if (props.size === "big")
      return `
        width: 55.04px;
        height: 35.77px;
        font-size: 24px;
      `;
  }}
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
