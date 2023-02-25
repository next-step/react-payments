import styled from "styled-components";
import { Size } from "../types/common";
import { Date } from "./Form/ExpiredDate";

function Card({
  bankName,
  cardNumber,
  userName,
  expiredDate,
  size = Size.Small,
  color,
}: CardProps) {
  const expiredMonth = Number(expiredDate.month);
  const expiredYear = Number(expiredDate.year);

  return (
    <CardContainer>
      <CardBox size={size} color={color}>
        <CardTop>
          <CardText>{bankName}</CardText>
        </CardTop>
        <CardMiddle>
          <CardChip />
        </CardMiddle>
        <CardBottom>
          {cardNumber ? (
            <CardBottomNumber>
              <CardText>{cardNumber}</CardText>
            </CardBottomNumber>
          ) : null}
          <CardBottomInfo>
            <CardText>{userName ?? "NAME"}</CardText>
            <CardText>
              {expiredMonth && expiredMonth > 0 ? expiredMonth : "MM"} /{" "}
              {expiredYear && expiredYear > 0 ? expiredYear : "YY"}
            </CardText>
          </CardBottomInfo>
        </CardBottom>
      </CardBox>
    </CardContainer>
  );
}

type CardSize = Exclude<Size, Size.Medium>;

type CardProps = {
  bankName?: string;
  cardNumber: string;
  userName?: string;
  expiredDate: Date;
  size?: CardSize;
  color?: string;
};

type CardBoxProps = {
  size?: CardSize;
  color?: string;
};

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
`;

const CardBox = styled.div<CardBoxProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${(props) => (props.size === Size.Big ? "290px" : "208px")};
  height: ${(props) => (props.size === Size.Big ? "180px" : "130px")};
  background: ${(props) => (!!props.color ? props.color : "#e5e5e5")};
  box-shadow: 3px 3px 5px rgb(0 0 0 / 25%);
  color: ${(props) => (props.color ? "black" : "#575757")};
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
