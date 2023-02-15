import styled from "styled-components";

type ComponentProps = {
  children: JSX.Element | JSX.Element[];
  medium?: boolean;
};

function InputBox({ children, medium = false }: ComponentProps) {
  return <Box medium={medium}>{children}</Box>;
}

type BoxProps = {
  medium?: boolean;
};

const Box = styled.div<BoxProps>`
  display: flex;
  align-items: center;
  margin-top: 0.375rem;
  width: ${(props) => (props.medium ? "50%;" : "")};
  color: #d3d3d3;
  border-radius: 0.25rem;
  background-color: #ecebf1;
`;

export default InputBox;
