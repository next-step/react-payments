import styled from "styled-components";

import { Button, Label } from "@/components/common";

export const CompletedCardWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

export const CompleteCardLabel = styled(Label)`
  font-size: 25px;
  color: #000000;
  margin-bottom: 30px;
`;

export const CompleteCardButtonWrapper = styled.div`
  text-align: right;
`;

export const DeleteCardButton = styled(Button)`
  color: #e24141;
`;
