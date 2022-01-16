import { MouseEventHandler, ReactNode } from "react";
import { createPortal } from "react-dom";
import Styled from "./BottomModal.styles";

interface Props {
  isShown: boolean;
  onClose: () => void;
  children?: ReactNode;
}

const BottomModal = ({ isShown, onClose, children }: Props) => {
  const onBackDropClick: MouseEventHandler<HTMLDivElement> = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return isShown ? (
    <Styled.Container onClick={onBackDropClick}>
      <Styled.ModalContent>{children}</Styled.ModalContent>
    </Styled.Container>
  ) : null;
};

const BottomModalPortal = (props: Props) => {
  const $modal = document.querySelector("#modal");

  if (!$modal) {
    throw Error("cannot find modal wrapper");
  }

  return createPortal(<BottomModal {...props} />, $modal);
};

export default BottomModalPortal;
export { BottomModal, Props };
