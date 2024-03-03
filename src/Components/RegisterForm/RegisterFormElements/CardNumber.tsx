import UseInput from "../../../Hooks/UseInput";
import { useCardInfo } from "../../../Context/CardProvider";

const CardNumber = () => {
  const { state, dispatch } = useCardInfo();

  const section1 = UseInput(state.cardNumber.section1, (event) => {
    dispatch({
      type: "SET_CARD_INFO",
      payload: { key: "cardNumber1", value: event.target.value },
    });
  });

  const section2 = UseInput(state.cardNumber.section2, (event) => {
    dispatch({
      type: "SET_CARD_INFO",
      payload: { key: "cardNumber2", value: event.target.value },
    });
  });

  const section3 = UseInput(state.cardNumber.section3, (event) => {
    dispatch({
      type: "SET_CARD_INFO",
      payload: { key: "cardNumber3", value: event.target.value },
    });
  });

  const section4 = UseInput(state.cardNumber.section4, (event) => {
    dispatch({
      type: "SET_CARD_INFO",
      payload: { key: "cardNumber4", value: event.target.value },
    });
  });

  return (
    <div className="input-container">
      <span className="input-title">카드 번호</span>
      <div className="input-box">
        <input
          className="input-basic"
          type="text"
          value={section1.value || ""}
          onChange={section1.handleChange}
        />
        <input
          className="input-basic"
          type="text"
          value={section2.value || ""}
          onChange={section2.handleChange}
        />
        <input
          className="input-basic"
          type="password"
          value={section3.value || ""}
          onChange={section3.handleChange}
        />
        <input
          className="input-basic"
          type="password"
          value={section4.value || ""}
          onChange={section4.handleChange}
        />
      </div>
    </div>
  );
};

export default CardNumber;
