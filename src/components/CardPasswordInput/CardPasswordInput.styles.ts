import styled from "@emotion/styled";

interface ColorProps {
  color?: string;
}

const Label = styled.label`
  display: block;
  margin-bottom: 7px;
  font-size: 12px;
  color: #525252;
`;

const FlexWrapper = styled.div`
  display: flex;
`;

const InputArea = styled.div<ColorProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #ecebf1;
  width: 45px;
  height: 45px;
  margin-right: 10px;
  padding: 12px;

  border: none;
  border-radius: 0.25rem;

  color: ${({ color }) => color ?? "inherit"};

  input {
    width: 100%;
    height: 100%;
    text-align: center;
    font-size: 32px;
  }
`;

const DisabledInputArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: transparent;
  width: 45px;
  height: 45px;
  margin-right: 10px;
`;

const Dot = styled.div<ColorProps>`
  width: 8px;
  height: 8px;
  border-radius: 50%;

  background-color: ${({ color }) => color ?? "#000000"};
`;

export default {
  Label,
  InputArea,
  FlexWrapper,
  DisabledInputArea,
  Dot,
};
