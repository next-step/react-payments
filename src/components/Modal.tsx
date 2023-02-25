import React, { useContext } from "react";
import styled from "styled-components";
import { BANKS } from "../constants/bank";
import { ModalContext } from "./ModalProvider";
import { CardContext } from "./CardProvider";
import { CardType } from "../types/common";

function Modal() {
  const modalContext = useContext(ModalContext);
  const cardContext = useContext(CardContext);

  if (!modalContext || !cardContext) {
    alert("context 누락");
    throw Error("context 필수값 누락");
  }

  const { setIsOpen } = modalContext;
  const { setCard } = cardContext;

  const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget.dataset.id) {
      // setBankId(e.currentTarget.dataset.id);
      setCard((card: CardType) => {
        return {
          ...card,
          bankId: e.currentTarget.dataset.id,
        };
      });
    }
    setIsOpen(false);
  };

  return (
    <>
      {BANKS.map((bank, index) => (
        <ModalItem key={`modal-${index}`} data-id={bank.ID} onClick={onClick}>
          <Dot color={bank.COLOR} />
          <Name>{bank.NAME}</Name>
        </ModalItem>
      ))}
    </>
  );
}

type DotProps = {
  color: string;
};

const ModalItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Dot = styled.div<DotProps>`
  margin: 0.5rem 1rem;
  border-radius: 50%;
  width: 2.8rem;
  height: 2.8rem;
  background-color: ${(props) => props.color};
`;

const Name = styled.span`
  font-size: 12px;
  letter-spacing: -0.085rem;
`;

export default Modal;
