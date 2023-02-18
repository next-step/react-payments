import Text from "components/Text";
import styled, { css } from "styled-components";

type DotProps = {
  color: ColorType;
  text: string;
};
type ColorType = "red" | "blue" | "green" | "pink" | "purple" | "cyon" | "yellow" | "orange";

const CardList = ({ color, text }: DotProps) => {
  return (
    <Layout>
      <Circle color={color} />
      <Text fontSize="s" weight="bold">
        {text}
      </Text>
    </Layout>
  );
};
export default CardList;
const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
type CircleProps = {
  color: ColorType;
};
const Circle = styled.div<CircleProps>`
  margin: 0.5rem 1rem;
  border-radius: 50%;
  width: 2.8rem;
  height: 2.8rem;
  background-color: #94dacd;
  ${({ color }) =>
    color === "red"
      ? css`
          background: #e14141;
        `
      : color === "cyon"
      ? css`
          background: #92e3d5;
        `
      : color === "blue"
      ? css`
          background: #557ce5;
        `
      : color === "green"
      ? css`
          background: #73bc6d;
        `
      : color === "pink"
      ? css`
          background: #e76e9b;
        `
      : color === "yellow"
      ? css`
          background: #fbcc58;
        `
      : color === "orange"
      ? css`
          background: #f37e3b;
        `
      : color === "purple"
      ? css`
          background: #df59ba;
        `
      : css`
          background: #94dacd;
        `}
`;
