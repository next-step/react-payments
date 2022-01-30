import styled from "styled-components";

function Button({ children, ...otherProps }) {
  return (
    <ButtonBox marginTop={otherProps.marginTop}>
      <ButtonText>{children}</ButtonText>
    </ButtonBox>
  );
}

export default Button;

const ButtonBox = styled.div`
  width: 100%;
  margin-top: ${(props) => (props.marginTop ? props.marginTop : "0")};
  text-align: right;
`;

const ButtonText = styled.button`
  background-color: transparent;
  border: 0;
  margin-right: 10px;
`;
