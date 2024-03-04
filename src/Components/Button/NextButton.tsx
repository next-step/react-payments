import { PageStepContext } from "../../Context/PageStepProvider";
import { useContext } from "react";

const NextButton = ({ className }: { className?: string }) => {
  const { handleCurrentStep } = useContext(PageStepContext);
  return (
    <div className={`button-box ${className}`} onClick={handleCurrentStep}>
      <span className="button-text">다음</span>
    </div>
  );
};

export default NextButton;
