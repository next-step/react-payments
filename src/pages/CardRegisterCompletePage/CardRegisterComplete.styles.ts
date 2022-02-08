import styled from "@emotion/styled";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    align-self: flex-end;
  }
`;

const H1 = styled.h1`
  color: #383838;
  font-size: 24px;
  margin: 100px 0 80px;
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
  H1,
  CardNameInput,
};
