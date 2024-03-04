import { ReactNode, useContext } from "react";
import { PageStepContext } from "../../../../Context/PageStepProvider";

const EmptyCardLayout = ({ children }: { children?: ReactNode }) => {
  const { handleCurrentStep } = useContext(PageStepContext);

  return (
    <div className="empty-card" onClick={handleCurrentStep}>
      {children}
    </div>
  );
};

export default EmptyCardLayout;
