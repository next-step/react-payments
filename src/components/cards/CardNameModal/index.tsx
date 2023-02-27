import React from "react";

import type { CardName } from "@/constants/variables";
import { CARD_NAMES } from "@/constants/variables";

import * as S from "./cardNameModal.style";

interface CardNameModalProps {
  isShow: boolean;
  cardNameList: CardName[];
  onCardNameSelect: (name: string, color: string) => void;
}

export default function CardNameModal({
  isShow,
  onCardNameSelect,
  cardNameList,
}: CardNameModalProps) {
  return (
    <>
      {isShow && (
        <S.CardNameModalContainer>
          <S.CardNameMItemWrapper>
            <S.CardNameMItemWrapper>
              {cardNameList.map(({ name, color }) => (
                <S.CardNameItemButton
                  key={name}
                  onClick={() => onCardNameSelect(name, color)}
                >
                  <S.CardNameIcon color={color} />
                  <S.CardName>{name}</S.CardName>
                </S.CardNameItemButton>
              ))}
            </S.CardNameMItemWrapper>
          </S.CardNameMItemWrapper>
        </S.CardNameModalContainer>
      )}
    </>
  );
}
