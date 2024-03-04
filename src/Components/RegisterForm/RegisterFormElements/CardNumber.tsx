import { useCardSectionInput } from "../../../Hooks/useCardSectionInput";

const CardNumber = () => {
  const section1 = useCardSectionInput("section1");
  const section2 = useCardSectionInput("section2");
  const section3 = useCardSectionInput("section3");
  const section4 = useCardSectionInput("section4");
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
