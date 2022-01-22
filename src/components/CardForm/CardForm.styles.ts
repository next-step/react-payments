import styled from "@emotion/styled";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  color: #04c09e;

  div {
    margin-bottom: 20px;
  }

  div:last-child {
    margin-bottom: 0;
  }

  button {
    align-self: flex-end;
  }
`;

export default { Form };
