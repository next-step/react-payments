import { useCardNumberInput } from "../../../Hooks/useCardNumberInput ";

const CardNumber = () => {
  const section1 = useCardNumberInput("section1");
  const section2 = useCardNumberInput("section2");
  const section3 = useCardNumberInput("section3");
  const section4 = useCardNumberInput("section4");
  return (
    <div className="input-container">
      <span className="input-title">카드 번호</span>
      <div className="input-box">
        <input
          className="input-basic"
          type="number"
          value={section1.value}
          onChange={section1.handleChange}
          maxLength={4}
          ref={focus}
        />
        <input
          className="input-basic"
          type="number"
          value={section2.value}
          onChange={section2.handleChange}
          maxLength={4}
          ref={focus}
        />
        <input
          className="input-basic"
          type="password"
          value={section3.value}
          onChange={section3.handleChange}
          maxLength={4}
          ref={focus}
        />
        <input
          className="input-basic"
          type="password"
          value={section4.value}
          onChange={section4.handleChange}
          maxLength={4}
          ref={focus}
        />
      </div>
    </div>
  );
};

export default CardNumber;
