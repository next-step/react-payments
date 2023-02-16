import styled, { css } from "styled-components";

type BoxProps = {
  children: any;
  width?: number;
  margin?: number;
};

export const Box = ({ children, width, margin }: BoxProps) => {
  return (
    <Layout width={width} margin={margin}>
      {children}
    </Layout>
  );
};

export default Box;
type LayoutProps = {
  width?: number;
  margin?: number;
};
const Layout = styled.div<LayoutProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width}%;
  margin: ${(props) => props.margin}px;
`;
