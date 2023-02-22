import React from "react";

import { Plus } from "@/assets/icons";

import type { CardProps } from "./Card";
import * as S from "./card.style";

type EmptyCardProps = Omit<CardProps, "cardInfo">;

export default function EmptyCard({
  size,
  className,
  color = "#e5e5e5",
  onClick,
}: EmptyCardProps) {
  return (
    <S.CardContainer
      className={className}
      size={size}
      color={color}
      onClick={onClick}
    >
      <Plus />
    </S.CardContainer>
  );
}
