import styled from "styled-components";

function Button({ text }) {
  return <ButtonText>{text}</ButtonText>;
}

export default Button;

const ButtonText = styled.span`
  margin-right: 10px;
`;
