import { useCardInfo } from "../../../Context/CardProvider";

const CardNickNameInput = () => {
  const { state, dispatch } = useCardInfo();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "SET_CARD_NCIKNAME",
      payload: { key: "cardNickName", value: event.target.value },
    });
  };

  return (
    <div className="input-container flex-center w-100">
      <input
        className="input-underline w-75"
        type="text"
        placeholder="카드의 별칭을 입력해주세요."
        value={state.cardNickName || ""}
        onChange={handleChange}
      />
    </div>
  );
};

export default CardNickNameInput;
