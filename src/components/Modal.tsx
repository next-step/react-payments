import React, { useContext } from "react";
import styled from "styled-components";
import { BANKS } from "../constants/bank";
import { ModalContext } from "./ModalProvider";

function Modal() {
  const context = useContext(ModalContext);

  if (!context) {
    alert("context 누락");
    throw Error("context 필수값 누락");
  }

  const { setBankId, toggleModal } = context;

  const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget.dataset.id) {
      setBankId(e.currentTarget.dataset.id);
    }
    toggleModal();
  };

  return (
    <Dimmed>
      <Box>
        {BANKS.map((bank, index) => (
          <ModalItem key={`modal-${index}`} data-id={bank.ID} onClick={onClick}>
            <Dot color={bank.COLOR} />
            <Name>{bank.NAME}</Name>
          </ModalItem>
        ))}
      </Box>
    </Dimmed>
  );
}

type DotProps = {
  color: string;
};

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
