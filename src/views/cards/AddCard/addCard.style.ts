import styled from "styled-components";

import { Header } from "@/components/common";

export const AddCardPageHeader = styled(Header)`
  margin-bottom: 25px;
`;

export const AddCardForm = styled.form`
  height: 100%;
  .add-form-card {
    margin: 0 auto 20px;
  }
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
