import React, { memo } from "react";

import * as S from "./cardInputDivider.style";

export default memo(function CardInputDivider({
  children,
}: {
  children: string;
}) {
  return <S.CardInputDividerBox>{children}</S.CardInputDividerBox>;
});
