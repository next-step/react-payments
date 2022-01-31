import styled from "styled-components";

function CompletedCard({ completedCard, ...otherProps }) {
  return (
    <CardBox>
      <Card big={otherProps.big} small={otherProps.small}>
        <CardTop>
          <CardText textBig={otherProps.big}>클린카드</CardText>
        </CardTop>
        <CardMiddle>
          <CardChip
            bigChip={otherProps.bigChip}
            smallChip={otherProps.smallChip}
          />
        </CardMiddle>
        <CardBottom>
          <CardBottomNumber>
            <CardText textBig={otherProps.big}>{`${
              completedCard?.cardNumberSeries
                ? completedCard.cardNumberSeries
                : "1111"
            } - ${
              completedCard?.cardNumberCompany
                ? completedCard.cardNumberCompany
                : "2222"
            } - **** - ****`}</CardText>
          </CardBottomNumber>
          <CardBottomInfo>
            <CardText textBig={otherProps.big}>
              {completedCard?.name ? completedCard.name : "SUN"}
            </CardText>
            <CardText textBig={otherProps.big}>{`${
              completedCard?.dueMonth ? completedCard.dueMonth : "04"
            } / ${
              completedCard?.dueYear ? completedCard.dueYear : "21"
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
  ${(props) =>
    props.big &&
    `
    width: 290px;
    height: 180px;
  `}
  ${(props) =>
    props.small &&
    `
    width: 208px;
    height: 130px;
  `}

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
  font-size: 14px;
  line-height: 16px;
  ${(props) =>
    props.textBig &&
    `
    font-size: 18px;
    line-height: 20px;
  `}
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
  ${(props) =>
    props.bigChip &&
    `
    width: 55.04px;
    height: 35.77px;
    font-size: 24px;
  `}
  ${(props) =>
    props.smallChip &&
    `
    width: 40px;
    height: 26px;
    left: 95px;
    top: 122px;
  `}
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
