import { Button, Input, InputInvalidMessage } from "../../../../../components";
import useModal from "../../../hooks/useModal";
import CardSecurityCodeTooltip from "./CardSecurityCodeTooltip";
import { useCardSecurityCode } from "./hooks";

interface IProps {
  focusNext: () => void;
  invalidMessage?: string;
}

export default function CardSecurityCode({
  focusNext,
  invalidMessage,
}: IProps) {
  const [$ref, { handleInput, invalid }] = useCardSecurityCode(focusNext);
  const { showModal } = useModal((closeModal) => (
    <div className="flex-column-center">
      <p>보안코드는 3자리 숫자로 입력해주세요.</p>
      <Button onClick={closeModal}>확인</Button>
    </div>
  ));

  return (
    <>
      <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
        <Input
          ref={$ref}
          className="w-25"
          nativeType="password"
          invalid={invalid}
          onInput={handleInput}
          required
        />
        <Button onClick={showModal}>
          <CardSecurityCodeTooltip />
        </Button>
      </div>
      <InputInvalidMessage>{invalidMessage}</InputInvalidMessage>
    </>
  );
}
