import styled from "styled-components";

type CardProps = {
  title: string;
  cardNumber: string;
  name?: string;
  expire?: string;
};

function Card({ title, cardNumber, name, expire }: CardProps) {
  return (
    <CardBox>
      <CardWrapper>
        <CardTop>
          <CardText>{title}</CardText>
        </CardTop>
        <CardMiddle>
          <CardChip />
        </CardMiddle>
        <CardBottom>
          <CardBottomNumber>
            <CardText>{cardNumber}</CardText>
          </CardBottomNumber>
          <CardBottomInfo>
            <CardText>{name}</CardText>
            <CardText>{expire}</CardText>
          </CardBottomInfo>
        </CardBottom>
      </CardWrapper>
    </CardBox>
  );
}

const CardBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 290px;
  height: 180px;
  background: #94dacd;
  box-shadow: 3px 3px 5px rgb(0 0 0 / 25%);
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

export default Card;
