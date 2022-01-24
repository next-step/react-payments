import styled from "@emotion/styled";

const Label = styled.label`
  display: block;
  margin-bottom: 7px;
  font-size: 12px;
  color: #525252;
`;

const InputArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #ecebf1;
  height: 45px;
  width: 100%;
  padding: 12px;

  border: none;
  border-radius: 0.25rem;
`;

export default {
  Label,
  InputArea,
};
