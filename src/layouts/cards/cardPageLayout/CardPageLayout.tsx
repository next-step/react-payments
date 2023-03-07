import React, { HtmlHTMLAttributes, PropsWithChildren } from "react";

import * as S from "./cardPageLayout.style";

type CardPageLayoutProps = PropsWithChildren<
  HtmlHTMLAttributes<HTMLDivElement>
>;

export default function CardPageLayout({
  children,
  ...props
}: CardPageLayoutProps) {
  return (
    <S.CardPageLayoutContainer {...props}>{children}</S.CardPageLayoutContainer>
  );
}
