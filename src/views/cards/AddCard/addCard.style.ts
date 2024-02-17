import styled from "styled-components";

import { Card } from "@/components/cards";
import { Header } from "@/components/common";

export const AddCardPageHeader = styled(Header)`
  margin-bottom: 25px;
`;

export const CustomizedCard = styled(Card)`
  margin: 0 auto 20px;
`;

export const AddCardForm = styled.form`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: space-between;
`;

export const AddCardFormInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const AddCardFormSubmitButtonWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: flex-end;
`;
