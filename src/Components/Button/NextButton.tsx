import { PageStepContext } from "../../Context/PageStepProvider";
import { useContext } from "react";

const NextButton = ({
  className,
  handleUpdate,
}: {
  className?: string;
  handleUpdate?: () => void;
}) => {
  const { handleCurrentStep } = useContext(PageStepContext);

  const handleNext = () => {
    if (handleUpdate) handleUpdate();
    handleCurrentStep();
  };

  return (
    <div className={`button-box ${className}`} onClick={handleNext}>
      <button className="button-text">다음</button>
    </div>
  );
};

export default NextButton;
