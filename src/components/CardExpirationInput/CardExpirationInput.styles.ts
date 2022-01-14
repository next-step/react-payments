import styled from "@emotion/styled";
import BaseInputWrapper from "../@shared/InputWrapper/InputWrapper";

const InputWrapper = styled(BaseInputWrapper)`
  color: #04c09e;
  width: 40%;

  input {
    width: 25px;
    margin: 0 5px;
    text-align: center;
    font-size: 15px;
  }
`;

export default { InputWrapper };
