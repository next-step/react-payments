import styled, { css } from "styled-components";
import Text from "components/Text";

type CardProps = {
  fontSize: fontSizeType;
  theme: CardThemeType;
  size: CardSizeType;
};
type fontSizeType = "s" | "m";

type CardThemeType = "empty" | "primary" | "add";
type CardSizeType = "small" | "big";
const Card = ({ fontSize, theme, size }: CardProps) => {
  return (
    <Layout theme={theme} size={size}>
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
        <NumberBox>
          <Text fontSize={fontSize} weight="normal"></Text>
        </NumberBox>
        <InfoBox>
          <Text fontSize={fontSize} weight="normal"></Text>
          <Text fontSize={fontSize} weight="normal"></Text>
        </InfoBox>
      </Bottom>
    </Layout>
  );
};
export default Card;

type LayoutProps = {
  theme: CardThemeType;
  size: CardSizeType;
};

const Layout = styled.div<LayoutProps>`
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

const NumberBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  justify-content: center;
`;
const InfoBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
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
