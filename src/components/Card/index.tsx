import styled, { css } from "styled-components";
import Text from "components/Text";

type CardProps = {
  fontSize: fontSizeType;
  theme: CardThemeType;
  size: CardSizeType;
};
type fontSizeType = "xs" | "s" | "m" | "lg";
type CardThemeType = "empty" | "primary" | "add";
type CardSizeType = "small" | "big";
const Card = ({ fontSize, theme, size }: CardProps) => {
  return (
    <>
      <CardLayout theme={theme} size={size}>
        <Top>
          <Text fontSize={fontSize} weight="normal"></Text>
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
          <NumberWrapper>
            <Text fontSize={fontSize} weight="normal"></Text>
          </NumberWrapper>
          <InfoContainer>
            <Text fontSize={fontSize} weight="normal"></Text>
            <Text fontSize={fontSize} weight="normal"></Text>
          </InfoContainer>
        </Bottom>
      </CardLayout>
      <CardNameWrapper>
        <Text fontSize="m" weight="normal">
          법인카드
        </Text>
      </CardNameWrapper>
    </>
  );
};
export default Card;

type CardLayoutProps = {
  theme: CardThemeType;
  size: CardSizeType;
};

const CardLayout = styled.div<CardLayoutProps>`
  display: flex;
  flex-direction: column;
  align-items: center;

  font-size: 30px;
  box-shadow: 3px 3px 5px rgb(0 0 0 / 25%);
  border-radius: 5px;

  ${({ theme }) =>
    theme === "empty"
      ? css`
          user-select: none;
          background: #e5e5e5;
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
`;
const Middle = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-left: ${(props) => (props.theme !== "add" ? "30px" : "0px")};
`;
const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const NumberWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  justify-content: center;
`;
const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  justify-content: space-between;
`;

const CardNameWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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
