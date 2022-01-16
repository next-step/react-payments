import styled from "@emotion/styled";
import BaseInputWrapper from "../InputWrapper/InputWrapper";

const InputWrapper = styled(BaseInputWrapper)`
  .input-area {
    width: 30%;
  }

  input {
    width: 100%;
    height: 100%;
    text-align: center;
    font-size: 32px;
  }
`;

export default { InputWrapper };
