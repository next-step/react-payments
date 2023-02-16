import styled, { css } from "styled-components";

type TextProps = {
  fontSize: fontSizeType;
  weight: WeightType;
  children?: any;
};

const Text = ({ fontSize, weight, children }: TextProps) => {
  return (
    <Layout fontSize={fontSize} weight={weight}>
      {children}
    </Layout>
  );
};

// size가 s일떄 특정 css 적용 , l일떄 특정 css 적용하게 구현
type fontSizeType = "s" | "m" | "page-title" | "input-title";
type WeightType = "primary" | "bold";
type LayoutProps = {
  fontSize: fontSizeType;
  weight: WeightType;
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
          font-size: 18px;
          line-height: 20px;
        `
      : fontSize === "page-title"
      ? css`
          font-size: 20px;
          line-height: 22px;
        `
      : css`
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
  color: #575757;
`;
export default Text;
