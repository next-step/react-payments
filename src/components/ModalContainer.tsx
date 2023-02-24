import { useContext } from "react";
import styled from "styled-components";
import { ModalContext } from "./ModalProvider";
type ComponentProps = {
  children?: JSX.Element | JSX.Element[] | null;
};

function ModalContainer({ children }: ComponentProps) {
  const modalContext = useContext(ModalContext);

  if (!modalContext) {
    alert("context 누락");
    throw Error("context 필수값 누락");
  }

  const { isOpen } = modalContext;

  return (
    <>
      {isOpen && (
        <Dimmed>
          <Box>{children}</Box>
        </Dimmed>
      )}
    </>
  );
}

const Dimmed = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  z-index: 5;
`;

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

export default ModalContainer;
