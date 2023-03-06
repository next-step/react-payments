import styled from "styled-components";

interface CardBoxProps {
  type?: "empty" | "small" | "big";
}

const cardSizes = {
  empty: {
    width: "208px",
    height: "130px",
    fontSize: "30px",
    color: "#575757",
    background: "#e5e5e5",
  },
  small: {
    width: "208px",
    height: "130px",
    fontSize: "30px",
    color: "#575757",
    background: "#94dacd",
  },
  big: {
    width: "290px",
    height: "180px",
    fontSize: "30px",
    color: "#575757",
    background: "#94dacd",
  },
};

export const CardBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 10px 0;
`;

export const PaymentsCard = styled.div<CardBoxProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: ${({ type }) => cardSizes[type || "empty"].width};
  height: ${({ type }) => cardSizes[type || "empty"].height};
  font-size: ${({ type }) => cardSizes[type || "empty"].fontSize || "inherit"};
  color: ${({ type }) => cardSizes[type || "empty"].color || "inherit"};
  background: ${({ type }) => cardSizes[type || "empty"].background};
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  user-select: none;
  cursor: pointer;
`;

export const SmallCardChip = styled.div`
  width: 40px;
  height: 26px;
  left: 95px;
  top: 122px;
  background: #cbba64;
  border-radius: 4px;
`;

export const BigCardChip = styled.div`
  width: 55.04px;
  height: 35.77px;
  background: #cbba64;
  border-radius: 4px;
  font-size: 24px;
`;

export const CardTop = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const CardMiddle = styled.div`
  width: 100%;
  height: 100%;
  margin-left: 30px;
  display: flex;
  align-items: center;
`;

export const CardBottom = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardBottomNumber = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardBottomInfo = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CardText = styled.span`
  margin: 0 16px;

  font-size: 14px;
  line-height: 16px;
  vertical-align: middle;
  font-weight: 400;
`;

export const CardTextBig = styled.span`
  margin: 0 16px;

  font-size: 18px;
  line-height: 20px;
  vertical-align: middle;
  font-weight: 400;
`;
