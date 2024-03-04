import SpanText from "../../../Text/SpanText";
import { useCardInfo } from "../../../../Context/CardProvider";

const CardNickName = () => {
  const {
    state: { cardNickName },
  } = useCardInfo();

  return <SpanText className="card-nickname">{cardNickName}</SpanText>;
};

export default CardNickName;
