import React from "react";
import styled from "styled-components";
import { BANKS } from "../constants/bank";
import { CardType } from "../types/common";
import useModalContext from "../hooks/useModalContext";
import useCardContext from "../hooks/useCardContext";

function Modal() {
  const { setIsOpen } = useModalContext();
  const { setCard } = useCardContext();

  const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget.dataset.id) {
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
