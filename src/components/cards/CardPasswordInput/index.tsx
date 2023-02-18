import React from "react";

import { Label } from "@/components/common";

import {
  CardPasswordInputContainer,
  CardPasswordInputEl,
  CardPasswordInputWrapper,
} from "./cardPasswordInput";

export default function CardPasswordInput({ ...props }) {
  return (
    <CardPasswordInputContainer>
      <Label>비밀번호</Label>
      <CardPasswordInputWrapper>
        <CardPasswordInputEl textAlign="center" type="password" />
        <CardPasswordInputEl textAlign="center" type="password" />
        <CardPasswordInputEl
          textAlign="center"
          type="password"
          value="*"
          disabled
        />
        <CardPasswordInputEl
          textAlign="center"
          type="password"
          value="*"
          disabled
        />
      </CardPasswordInputWrapper>
    </CardPasswordInputContainer>
  );
}
