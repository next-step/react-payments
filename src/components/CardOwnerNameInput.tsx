import styled from "styled-components";
import { InputContainer, InputTitle, InputBasic } from "./common/Input";
import { useOwnerNameInput } from "../hooks/useOwnerNameInput";

const StyledInputBasic = styled(InputBasic)`
  text-transform: uppercase;
`;

const OwnerNameInput = () => {
  const { ownerName, handleOwnerNameChange } = useOwnerNameInput();

  return (
    <InputContainer>
      <InputTitle>카드 소유자 이름(선택)</InputTitle>
      <StyledInputBasic
        type="text"
        placeholder="카드에 표시된 이름과 동일하게 입력하세요."
        onChange={handleOwnerNameChange}
        value={ownerName}
        maxLength={30}
      />
    </InputContainer>
  );
};

export default OwnerNameInput;
