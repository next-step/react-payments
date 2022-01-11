import React from 'react';
import { FlexCenter } from 'components/UI';
import {
  Modal,
  ModalDimmed,
  ModalItemContainer,
  ModalItemDot,
  ModalItemName,
} from './modal.style';

const ModalComponent = () => {
  return (
    <>
      <ModalDimmed>
        <Modal>
          <FlexCenter>
            <ModalItemContainer>
              <ModalItemDot />
              <ModalItemName>클린 카드</ModalItemName>
            </ModalItemContainer>
            <ModalItemContainer>
              <ModalItemDot />
              <ModalItemName>클린 카드</ModalItemName>
            </ModalItemContainer>
            <ModalItemContainer>
              <ModalItemDot />
              <ModalItemName>클린 카드</ModalItemName>
            </ModalItemContainer>
            <ModalItemContainer>
              <ModalItemDot />
              <ModalItemName>클린 카드</ModalItemName>
            </ModalItemContainer>
          </FlexCenter>
          <FlexCenter>
            <ModalItemContainer>
              <ModalItemDot />
              <ModalItemName>클린 카드</ModalItemName>
            </ModalItemContainer>
            <ModalItemContainer>
              <ModalItemDot />
              <ModalItemName>클린 카드</ModalItemName>
            </ModalItemContainer>
            <ModalItemContainer>
              <ModalItemDot />
              <ModalItemName>클린 카드</ModalItemName>
            </ModalItemContainer>
            <ModalItemContainer>
              <ModalItemDot />
              <ModalItemName>클린 카드</ModalItemName>
            </ModalItemContainer>
          </FlexCenter>
        </Modal>
      </ModalDimmed>
    </>
  );
};

export default ModalComponent;
