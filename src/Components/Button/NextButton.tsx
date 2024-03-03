import { PageStepContext } from "../../Context/PageStepProvider";
import { useContext } from "react";
const NextButton = () => {
  const { handleCurrentStep } = useContext(PageStepContext);
  return (
    <div className="button-box" onClick={handleCurrentStep}>
      <span className="button-text">다음</span>
    </div>
  );
};
export default NextButton;
