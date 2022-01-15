import styled from "@emotion/styled";

import BaseInputWrapper from "../InputWrapper/InputWrapper";

const InputWrapper = styled(BaseInputWrapper)`
  color: #04c09e;

  input {
    width: 40px;
    margin: 0 5px;
    text-align: center;
    font-size: 15px;

    &:first-of-type {
      margin-left: 0;
    }

    &:last-of-type {
      margin-right: 0;
    }
  }
`;

export default { InputWrapper };
