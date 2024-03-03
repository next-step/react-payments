import { ReactElement, ComponentType, useContext } from "react";
import { PageStepContext } from "../Context/PageStepProvider";

const NextStep = ({ children }: { children: ReactElement | null }) => {
  const { currentStep } = useContext(PageStepContext);
  if (
    children !== null &&
    typeof children.type !== "string" &&
    (children.type as ComponentType).name === currentStep.currentPage
  )
    return <>{children}</>;
};

export default NextStep;
