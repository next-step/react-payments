import { useCardState } from "../../hook/useCardState";
import { getNumberString } from "../../util/regExp";
import Input from "../atomic-design-pattern/atom/Input";

export default function SecurityCodeInput() {
  const { cardState, setCardState } = useCardState();
  const onChangeSecurityCode = (event) => {
    const { value } = event.target;

    const onlyNumberValue = getNumberString(value);

    setCardState((prev) => {
      return { ...prev, securityCode: onlyNumberValue };
    });
  };

  return (
    <Input
      value={cardState.securityCode}
      onChange={onChangeSecurityCode}
      className="w-25"
      type="password"
      maxLength="3"
    />
  );
}
