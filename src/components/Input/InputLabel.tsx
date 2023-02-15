import React from "react";
import styled from "styled-components";

type ComponentProps = {
  children: React.ReactChild;
};

function InputLabel({ children }: ComponentProps) {
  return <Label>{children}</Label>;
}

const Label = styled.span`
  display: flex;
  align-items: center;
  font-size: 12px;
  line-height: 14px;
  margin-bottom: 4px;
  color: #525252;
`;

export default InputLabel;
