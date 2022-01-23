import styled from "styled-components";

function Button({ children }) {
  return <ButtonText>{children}</ButtonText>;
}

export default Button;

const ButtonText = styled.span`
  margin-right: 10px;
`;
