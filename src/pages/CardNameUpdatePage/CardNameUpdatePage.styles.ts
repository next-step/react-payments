import styled from "@emotion/styled";

const Main = styled.main`
  display: flex;
  justify-content: center;
  padding: 200px 0;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    align-self: flex-end;
  }
`;

const CardNameInput = styled.input`
  width: 245px;
  padding: 6px;
  margin-top: 50px;
  margin-bottom: 40px;
  border-bottom: 1px solid #737373;
  text-align: center;
  color: #383838;
  font-size: 18px;
`;

export default {
  Main,
  Form,
  CardNameInput,
};
