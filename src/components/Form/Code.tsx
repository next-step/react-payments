import styled from "styled-components";
import { Size } from "../../types/common";
import Input from "../Input/Input";
import InputContainer from "../Input/InputContainer";
import ToolTip from "../ToolTip";

function Code({ onCodeChange }: CodeProps) {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, "");

    onCodeChange(Number(e.currentTarget.value));
  };

  return (
    <InputContainer label="보안코드(CVC/CVV)">
      <Box>
        <Input
          size={Size.Medium}
          onChange={onChange}
          name="code"
          maxLength={3}
          type="password"
        ></Input>
        <ToolTip />
      </Box>
    </InputContainer>
  );
}

type CodeProps = {
  onCodeChange: Function;
};

const Box = styled.div``;

export default Code;
