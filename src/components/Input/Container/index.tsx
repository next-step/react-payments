import styled, { css } from "styled-components";

type ContainerProps = {
  children: any;
  width?: number;
  margin?: number;
};

export const Container = ({ children, width, margin }: ContainerProps) => {
  return (
    <Layout width={width} margin={margin}>
      {children}
    </Layout>
  );
};

export default Container;
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
