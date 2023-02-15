import styled from "styled-components";
import InputLabel from "./InputLabel";

type ComponentProps = {
  children: JSX.Element | JSX.Element[];
  label: string;
};

function InputContainer({ children, label }: ComponentProps) {
  return (
    <StyledContainer>
      <InputLabel>{label}</InputLabel>
      {children}
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  margin: 16px 0;
`;

export default InputContainer;
