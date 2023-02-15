import React from "react";
import styled from "styled-components";

type ComponentProps = {
  children: React.ReactChild;
};

function InputBox({ children }: ComponentProps) {
  return <Box>{children}</Box>;
}

const Box = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.375rem;
  color: #d3d3d3;
  border-radius: 0.25rem;
  background-color: #ecebf1;
`;

export default InputBox;
