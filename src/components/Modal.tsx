import React, { useContext } from "react";
import styled from "styled-components";
import { ModalContext } from "./Layout";

const CARDS = [
  {
    NAME: "강준카드",
    COLOR: "#e056fd",
    ID: "gang-jun",
  },
  {
    NAME: "보검카드",
    COLOR: "#badc58",
    ID: "bo-geom",
  },
  {
    NAME: "해인카드",
    COLOR: "#ffbe76",
    ID: "hae-in",
  },
  {
    NAME: "도현카드",
    COLOR: "#eb4d4b",
    ID: "do-hyun",
  },
  {
    NAME: "도환카드",
    COLOR: "#30336b",
    ID: "do-hwan",
  },
  {
    NAME: "진구카드",
    COLOR: "#22a6b3",
    ID: "jin-gu",
  },
  {
    NAME: "수혁카드",
    COLOR: "#535c68",
    ID: "soo-hyuk",
  },
  {
    NAME: "중기카드",
    COLOR: "#f9ca24",
    ID: "jung-ki",
  },
];

function Modal() {
  const { setCardId, toggleModal } = useContext(ModalContext);

  const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget.dataset.id) {
      setCardId(e.currentTarget.dataset.id);
    }
    toggleModal();
  };

  return (
    <Dimmed>
      <Box>
        {CARDS.map((card, index) => (
          <ModalItem key={`modal-${index}`} data-id={card.ID} onClick={onClick}>
            <Dot color={card.COLOR} />
            <Name>{card.NAME}</Name>
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
