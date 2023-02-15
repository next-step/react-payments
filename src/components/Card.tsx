import styled from "styled-components";

type CardProps = {
  bankName?: string;
  cardNumber?: string;
  userName?: string;
  expireMonth?: string;
  expireYear?: string;
  size?: "big" | "small";
};

type WrapperProps = {
  size?: "big" | "small";
  isTyping?: boolean;
};

function Card({
  bankName,
  cardNumber,
  userName,
  expireMonth,
  expireYear,
  size = "small",
}: CardProps) {
  const isTyping =
    cardNumber !== undefined &&
    expireMonth !== undefined &&
    expireYear !== undefined &&
    userName !== undefined;

  return (
    <CardBox>
      <CardWrapper size={size} isTyping={isTyping}>
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
          ) : (
            ""
          )}
          <CardBottomInfo>
            <CardText>{userName ?? "NAME"}</CardText>
            <CardText>
              {expireMonth ?? "MM"} / {expireYear ?? "YY"}
            </CardText>
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

const CardWrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${(props) => (props.size === "big" ? "290px" : "208px")};
  height: ${(props) => (props.size === "big" ? "180px" : "130px")};
  background: ${(props) => (props.isTyping ? "#94dacd" : "#e5e5e5")};
  box-shadow: 3px 3px 5px rgb(0 0 0 / 25%);
  color: ${(props) => (props.isTyping ? "black" : "#575757")};
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
