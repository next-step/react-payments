import { PageStepContext } from "../../Context/PageStepProvider";
import { useContext } from "react";

interface NextButtonProps {
  className?: string;
}

const NextButton: React.FC<NextButtonProps> = ({ className }) => {
  const { handleCurrentStep } = useContext(PageStepContext);
  return (
    <div className={`button-box ${className}`} onClick={handleCurrentStep}>
      <span className="button-text">다음</span>
    </div>
  );
};

export default NextButton;
