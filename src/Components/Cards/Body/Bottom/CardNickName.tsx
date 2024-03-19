import SpanText from "../../../Text/SpanText";

const CardNickName = ({ cardNickName }: { cardNickName: string | null }) => {
  return <SpanText className="card-nickname">{cardNickName}</SpanText>;
};

export default CardNickName;
