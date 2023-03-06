import { useRef } from "react";
import styled from "styled-components";
import { Size } from "../../types/common";
import Input from "../Input/Input";
import InputContainer from "../Input/InputContainer";
import ToolTip, { ToolTipHandle } from "../ToolTip";

function Code({ onCodeChange }: CodeProps) {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, "");

    onCodeChange(Number(e.currentTarget.value));
  };

  const onFocus = () => {
    tooltipRef.current?.toggleToolTip(true);
  };
  const onBlur = () => {
    tooltipRef.current?.toggleToolTip(false);
  };
  const tooltipRef = useRef<ToolTipHandle>(null);

  return (
    <InputContainer label="보안코드(CVC/CVV)">
      <Box>
        <Input
          size={Size.Medium}
          onChange={onChange}
          name="code"
          maxLength={3}
          type="password"
          onFocus={onFocus}
          onBlur={onBlur}
        ></Input>
        <ToolTip ref={tooltipRef} />
      </Box>
    </InputContainer>
  );
}

type CodeProps = {
  onCodeChange: Function;
};

const Box = styled.div``;

export default Code;
