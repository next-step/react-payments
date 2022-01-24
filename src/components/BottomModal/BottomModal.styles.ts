import styled from "@emotion/styled";
import { slideInFormBottom } from "../../utils/keyframes";

const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  background-color: rgba(0, 0, 0, 0.6);
`;

const ModalContent = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #ffffff;
  padding: 20px;
  border-radius: 7px 7px 0 0;

  animation: ${slideInFormBottom} 0.8s ease;
`;

export default { Container, ModalContent };
