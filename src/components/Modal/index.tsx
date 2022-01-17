import React from 'react';
import { FlexCenter } from '../../common/styles';
import {
  Modal,
  ModalDimmed,
  ModalItemButton,
  ModalItemConatainer,
  ModalItemDot,
  ModalItemName,
} from './styles';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  onClickSpace: () => void;
}

const index = ({ open, onClose, onClickSpace }: ModalProps) => {
  return (
    <ModalDimmed open={open} onClick={onClickSpace}>
      <Modal>
        <FlexCenter>
          <ModalItemConatainer>
            <ModalItemButton onClick={onClose}>
              <ModalItemDot color="#e24141"></ModalItemDot>
              <ModalItemName>포코 카드</ModalItemName>
            </ModalItemButton>
          </ModalItemConatainer>
          <ModalItemConatainer>
            <ModalItemButton onClick={onClose}>
              <ModalItemDot color="#547ce4"></ModalItemDot>
              <ModalItemName>준 카드</ModalItemName>
            </ModalItemButton>
          </ModalItemConatainer>
          <ModalItemConatainer>
            <ModalItemButton onClick={onClose}>
              <ModalItemDot color="#73BC6D"></ModalItemDot>
              <ModalItemName>공원 카드</ModalItemName>
            </ModalItemButton>
          </ModalItemConatainer>
          <ModalItemConatainer>
            <ModalItemButton onClick={onClose}>
              <ModalItemDot color="#DE59B9"></ModalItemDot>
              <ModalItemName>브랜 카드</ModalItemName>
            </ModalItemButton>
          </ModalItemConatainer>
        </FlexCenter>
        <FlexCenter>
          <ModalItemConatainer>
            <ModalItemButton onClick={onClose}>
              <ModalItemDot color="#04C09E"></ModalItemDot>
              <ModalItemName>로이드 카드</ModalItemName>
            </ModalItemButton>
          </ModalItemConatainer>
          <ModalItemConatainer>
            <ModalItemButton onClick={onClose}>
              <ModalItemDot color="#E76E9A"></ModalItemDot>
              <ModalItemName>도비 카드</ModalItemName>
            </ModalItemButton>
          </ModalItemConatainer>
          <ModalItemConatainer>
            <ModalItemButton onClick={onClose}>
              <ModalItemDot color="#F37D3B"></ModalItemDot>
              <ModalItemName>콜린 카드</ModalItemName>
            </ModalItemButton>
          </ModalItemConatainer>
          <ModalItemConatainer>
            <ModalItemButton onClick={onClose}>
              <ModalItemDot color="#FBCD58"></ModalItemDot>
              <ModalItemName>썬 카드</ModalItemName>
            </ModalItemButton>
          </ModalItemConatainer>
        </FlexCenter>
      </Modal>
    </ModalDimmed>
  );
};

export default index;
