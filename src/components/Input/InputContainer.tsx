import styled from "styled-components";
import InputLabel from "./InputLabel";

function InputContainer({ children, label, rightLabel }: ComponentProps) {
  return (
    <StyledContainer>
      <InputLabel rightLabel={rightLabel}>{label}</InputLabel>
      {children}
    </StyledContainer>
  );
}

type ComponentProps = {
  children: JSX.Element | JSX.Element[];
  label: string;
  rightLabel?: string;
};

const StyledContainer = styled.div`
  margin: 16px 0;
`;

export default InputContainer;
