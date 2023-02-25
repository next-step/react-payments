import styled from "styled-components";

import { InputLabelProps } from ".";

export const LabelEl = styled.label<Pick<InputLabelProps, "color">>`
  display: flex;
  align-items: center;
  font-size: 12px;
  line-height: 14px;
  margin-bottom: 4px;
  color: ${(props) => props.color};
`;
