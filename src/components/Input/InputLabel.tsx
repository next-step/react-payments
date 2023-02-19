import styled from "styled-components";

function InputLabel({ children, rightLabel }: ComponentProps) {
  return (
    <Label>
      {children}
      {rightLabel ? <RightLabel>{rightLabel}</RightLabel> : null}
    </Label>
  );
}

type ComponentProps = {
  children: string;
  rightLabel?: string;
};

const Label = styled.span`
  display: flex;
  align-items: center;
  font-size: 12px;
  line-height: 14px;
  margin-bottom: 4px;
  color: #525252;
`;

const RightLabel = styled.div`
  margin-left: auto;
`;

export default InputLabel;
