import React, { ReactNode } from "react";

import * as S from "./cardPageLayout.style";

interface CardPageLayoutProps {
  children: ReactNode;
}

export default function CardPageLayout({ children }: CardPageLayoutProps) {
  return <S.CardPageLayoutContainer>{children}</S.CardPageLayoutContainer>;
}
