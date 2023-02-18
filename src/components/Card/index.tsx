import styled, { css } from "styled-components";
import Text from "components/Text";
import { useEffect, useState } from "react";

type CardProps = {
  theme: CardThemeType;
  size: CardSizeType;
  cardNumber?: string;
  expirationDate?: exprationProps;
  ownerName?: string;
};
type CardThemeType = "empty" | "primary" | "add";
type CardSizeType = "small" | "big";
type exprationProps = {
  month: string;
  year: string;
};

const Card = ({ theme, size, cardNumber, expirationDate, ownerName }: CardProps) => {
  const [companyInfo, setCompanyInfo] = useState("Empty");
  const [ownerNameInfo, setownerNameInfo] = useState(ownerName);
  const [expirationDateInfo, setExpirationDateInfo] = useState(expirationDate);
  const [cardNumberInfo, setCardNumberInfo] = useState(cardNumber);

  console.log(expirationDate);
  useEffect(() => {
    setCardNumberInfo(cardNumber);
  }, [cardNumber]);
  useEffect(() => {
    setExpirationDateInfo(expirationDate);
  }, [expirationDate]);
  useEffect(() => {
    setownerNameInfo(ownerName);
  }, [ownerName]);

  return (
    <Layout>
      <Container theme={theme} size={size}>
        <Top>
          <Text fontSize="s" weight="bold">
            {companyInfo}
          </Text>
        </Top>
        {theme === "add" ? (
          <Middle theme="add">
            <Add>+</Add>
          </Middle>
        ) : (
          <Middle>
            <Chip />
          </Middle>
        )}
        <Bottom>
          <Text fontSize="m" weight="bold">
            {cardNumberInfo}
          </Text>
          <InfoContainer>
            <Text fontSize="s" weight="bold">
              {ownerNameInfo}
            </Text>
            <Text fontSize="s" weight="bold">
              {expirationDate && `${expirationDate.month}/${expirationDate.year}`}
            </Text>
          </InfoContainer>
        </Bottom>
      </Container>
    </Layout>
  );
};

export default Card;

type ContainerProps = {
  theme: CardThemeType;
  size: CardSizeType;
};
const Layout = styled.div`
  display: flex;
  justify-content: center;
`;
const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 30px;
  box-shadow: 3px 3px 5px rgb(0 0 0 / 25%);
  border-radius: 5px;
  cursor: pointer;

  ${({ theme }) =>
    theme === "empty"
      ? css`
          user-select: none;
          background: #e5e5e5;
          cursor: pointer;
        `
      : theme === "add"
      ? css`
          background: #e5e5e5;
          cursor: pointer;
        `
      : css`
          background: #94dacd;
        `}
  ${({ size }) =>
    size === "small"
      ? css`
          width: 208px;
          height: 130px;
        `
      : css`
          width: 290px;
          height: 180px;
        `}
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0px 10px;
`;
const Middle = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-left: ${(props) => (props.theme !== "add" ? "30px" : "0px")};
  padding-bottom: 10px;
`;
const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 10px 20px;
  justify-content: space-between;
`;

const Chip = styled.div`
  width: 40px;
  height: 26px;
  left: 95px;
  top: 122px;
  background-color: #cbba64;
  border-radius: 4px;
`;
const Add = styled.div`
  margin: 0 auto;
`;
