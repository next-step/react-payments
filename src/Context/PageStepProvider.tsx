import { createContext, useState, ReactElement } from "react";

const TotalPage = ["Page1", "Page2", "Page3", "Page4", "Page5"];

export const PageStepContext = createContext({
  currentStep: {
    currentPage: TotalPage[0],
    idx: 0,
  },
  handleCurrentStep: () => {},
});

const PageStepProvider = ({ children }: { children: ReactElement | null }) => {
  const [currentStep, setCurrentStep] = useState({
    currentPage: TotalPage[2],
    idx: 2,
  });

  const handleCurrentStep = () => {
    setCurrentStep({
      currentPage: TotalPage[currentStep.idx + 1],
      idx: currentStep.idx + 1,
    });
  };

  return (
    <PageStepContext.Provider value={{ currentStep, handleCurrentStep }}>
      {children}
    </PageStepContext.Provider>
  );
};

export default PageStepProvider;
