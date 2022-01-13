import styled from "@emotion/styled";

const Label = styled.label`
  display: inline-block;
  margin-bottom: 7px;
  font-size: 12px;
  color: #525252;
`;

const InputArea = styled.div`
  display: flex;
  justify-contents: space-between;

  background-color: #ecebf1;
  height: 45px;
  width: 100%;
  padding: 12px;

  border-color: #9ca3af;
  border: none;
  border-radius: 0.25rem;

  input {
    width: 100%;
    height: 100%;

    margin: 0 5px;
  }

  input:first-child {
    margin-left: 0;
  }

  input:last-child {
    margin-right: 0;
  }
`;

export default {
  Label,
  InputArea,
};
