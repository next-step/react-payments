import styled from "styled-components";

import { InputLabelProps } from ".";

export const Label = styled.label<Pick<InputLabelProps, "color">>`
  display: flex;
  align-items: center;
  font-size: 12px;
  line-height: 14px;
  margin: 4px 0px;
  color: ${(props) => props.color};
`;
