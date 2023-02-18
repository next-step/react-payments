import Dot from "components/CardDotInfo";
import styled from "styled-components";

type ModalProps = {
  children: any;
};

export const Modal = ({ children }: ModalProps) => {
  return (
    <Overlay>
      <Layout>{children}</Layout>
    </Overlay>
  );
};
const Overlay = styled.div`
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

const Layout = styled.div`
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
