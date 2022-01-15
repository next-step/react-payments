import styled from "@emotion/styled";
import BaseInputWrapper from "../InputWrapper/InputWrapper";

const InputWrapper = styled(BaseInputWrapper)`
  position: relative;

  input {
    width: 100%;
    height: 100%;
  }
`;

const Indicator = styled.div`
  position: absolute;
  top: 6px;
  right: 0;

  font-size: 12px;
  color: #525252;
`;

export default { InputWrapper, Indicator };
