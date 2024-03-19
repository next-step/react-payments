import { useCardInfo } from "../../../Context/CardProvider";
import { useCardNumberInput } from "../../../Hooks/Input/useCardNumberInput ";

const CardNumber = () => {
  const section1 = useCardNumberInput("section1");
  const section2 = useCardNumberInput("section2");
  const section3 = useCardNumberInput("section3");
  const section4 = useCardNumberInput("section4");
  const { state } = useCardInfo();
  return (
    <div className="input-container">
      <span className="input-title">카드 번호</span>
      <div className="input-box">
        <input
          className="input-basic"
          type="number"
          value={state.cardNumber.section1}
          onChange={section1.handleChange}
          maxLength={4}
          ref={focus}
        />
        <input
          className="input-basic"
          type="number"
          value={state.cardNumber.section2}
          onChange={section2.handleChange}
          maxLength={4}
          ref={focus}
        />
        <input
          className="input-basic"
          type="password"
          value={state.cardNumber.section3}
          onChange={section3.handleChange}
          maxLength={4}
          ref={focus}
        />
        <input
          className="input-basic"
          type="password"
          value={state.cardNumber.section4}
          onChange={section4.handleChange}
          maxLength={4}
          ref={focus}
        />
      </div>
    </div>
  );
};

export default CardNumber;
