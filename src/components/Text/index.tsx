import styled, { css } from "styled-components";

type TextProps = {
  fontSize: fontSizeType;
  weight?: WeightType;
  children?: any;
  fontColor?: fontColorType;
};

const Text = ({ fontSize, weight, children, fontColor }: TextProps) => {
  return (
    <Layout fontSize={fontSize} weight={weight} fontColor={fontColor}>
      {children}
    </Layout>
  );
};

// size가 s일떄 특정 css 적용 , l일떄 특정 css 적용하게 구현
type fontSizeType = "xs" | "s" | "m" | "lg";
type WeightType = "normal" | "bold";
type fontColorType = "red" | "blue" | "green" | "pink" | "purple" | "cyon" | "yellow" | "orange" | "empty";

type LayoutProps = {
  fontSize: fontSizeType;
  weight?: WeightType;
  fontColor?: fontColorType;
};

// 어떤식으로 처리할지..
const Layout = styled.span<LayoutProps>`
  ${({ fontSize }) =>
    fontSize === "s"
      ? css`
          font-size: 14px;
          line-height: 16px;
        `
      : fontSize === "m"
      ? css`
          font-size: 16px;
          line-height: 20px;
        `
      : fontSize === "lg"
      ? css`
          font-size: 20px;
          line-height: 22px;
        `
      : css`
          //xs일떄
          font-size: 12px;
          line-height: 14px;
        `}

  ${({ weight }) =>
    weight === "bold"
      ? css`
          font-weight: 600;
        `
      : css`
          font-weight: 400;
        `}

    vertical-align:middle;

  ${({ fontColor }) =>
    fontColor === "red"
      ? css`
          color: #e14141;
        `
      : fontColor === "cyon"
      ? css`
          color: #92e3d5;
        `
      : fontColor === "blue"
      ? css`
          color: #557ce5;
        `
      : fontColor === "green"
      ? css`
          color: #73bc6d;
        `
      : fontColor === "pink"
      ? css`
          color: #e76e9b;
        `
      : fontColor === "yellow"
      ? css`
          color: #fbcc58;
        `
      : fontColor === "orange"
      ? css`
          color: #f37e3b;
        `
      : fontColor === "purple"
      ? css`
          color: #df59ba;
        `
      : css`
          color: #575757;
        `}
  color: #575757;
`;
export default Text;
