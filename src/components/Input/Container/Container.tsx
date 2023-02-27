import styled, { css } from "styled-components";

type ContainerProps = {
  children: React.ReactNode;
  width?: number;
  margin?: number;
  className?: string;
};

export const Container = ({ className, children, width, margin }: ContainerProps) => {
  return (
    <Layout className={className} width={width} margin={margin}>
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
