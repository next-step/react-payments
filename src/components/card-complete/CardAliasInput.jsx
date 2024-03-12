import { useCardState } from "../../hook/useCardState";
import InputContainer from "../atomic-design-pattern/organism/InputContainer";
import Input from "../atomic-design-pattern/atom/Input";

export default function CardAliasInput() {
  const { cardState, setCardState } = useCardState();
  const { alias } = cardState;

  const onChangeCardAlias = (event) => {
    const { value } = event.target;

    setCardState((prev) => {
      return { ...prev, alias: value };
    });
  };

  return (
    <InputContainer className="flex-center w-100">
      <Input
        className="input-underline w-75"
        placeholder="카드 별칭"
        value={alias}
        onChange={onChangeCardAlias}
      />
    </InputContainer>
  );
}
