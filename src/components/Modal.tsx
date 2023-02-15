import styled from "styled-components";

function Modal({ children }: ComponentProps) {
  return <Box>{children}</Box>;
}

type ComponentProps = {
  children: JSX.Element | JSX.Element[];
};

const Box = styled.div`
  width: 375px;
  height: 220px;
  border-radius: 5px 5px 15px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background: #fff;
  z-index: 10;
`;

export default Modal;
