import styled from "styled-components";

function InputLabel({ children }: ComponentProps) {
  return <Label>{children}</Label>;
}

type ComponentProps = {
  children: string;
};

const Label = styled.span`
  display: flex;
  align-items: center;
  font-size: 12px;
  line-height: 14px;
  margin-bottom: 4px;
  color: #525252;
`;

export default InputLabel;
