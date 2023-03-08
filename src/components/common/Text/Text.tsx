import styled, { css } from "styled-components";
import { FontSizeType, FontWeightType, ColorType } from "types";

export type TextProps = {
  fontSize: FontSizeType;
  label: string;
  weight?: FontWeightType;
  fontColor?: ColorType;
  className?: string;
};

const Text = ({ className, fontSize, weight, label, fontColor }: TextProps) => {
  return (
    <Layout className={className} fontSize={fontSize} weight={weight} fontColor={fontColor}>
      {label}
    </Layout>
  );
};

type LayoutProps = {
  fontSize: FontSizeType;
  weight?: FontWeightType;
  fontColor?: ColorType;
  className?: string;
};

// size가 s일떄 특정 css 적용 , l일떄 특정 css 적용하게 구현
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
      : fontSize === "xl"
      ? css`
          font-size: 24px;
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
          font-weight: 700;
        `
      : css`
          font-weight: 500;
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
          color: black;
        `}
`;
export default Text;
