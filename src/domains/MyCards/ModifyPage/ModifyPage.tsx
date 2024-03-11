import { useNavigate, useSearchParams } from "react-router-dom";
import { initialCards } from "../../../constants";
import useLocalStorage from "../../../hooks/useLocalStorage";
import CardNaming, {
  NameQuery,
} from "../../RegisterPage/CardNaming/CardNaming";
import { Card } from "../../RegisterPage/CardRegister/types";
import { omitObj } from "../../../utils";

export default function ModifyPage() {
  const [cards, setCards] = useLocalStorage<Card[]>("mycards", initialCards);
  const [param] = useSearchParams();
  const navigate = useNavigate();
  const uuid = param.get("uuid");

  if (!uuid) throw new Error("index search 파라미터가 필수입니다.");

  function isThis(value: Card) {
    return value.uuid === uuid;
  }

  const targetCard = cards.find(isThis);

  if (!targetCard) return <div>존재하지 않은 카드입니다.</div>;

  function changeName(name: NameQuery) {
    const copied = [...cards];
    const targetCard = copied.find(isThis);
    if (targetCard) targetCard["holderName"] = name.cardName;
    setCards(copied);
    navigate("/mycards");
  }

  return (
    <CardNaming
      card={omitObj<Omit<Card, "createdAt">>(targetCard, ["createdAt"])}
      onSubmit={changeName}
    />
  );
}
