import { createContext, useState, ReactElement } from "react";

const TotalPage = ["Page1", "Page2", "Page3", "Page4", "Page5"];

export const PageStepContext = createContext({
  currentStep: {
    currentPage: TotalPage[0],
    idx: 0,
  },
  handleCurrentStep: () => {},
  handleProvise: () => {},
});

const PageStepProvider = ({ children }: { children: ReactElement | null }) => {
  const [currentStep, setCurrentStep] = useState({
    currentPage: TotalPage[0],
    idx: 0,
  });
  const handleProvise = () => {
    setCurrentStep({
      currentPage: TotalPage[3],
      idx: 3,
    });
  };
  const handleCurrentStep = () => {
    if (currentStep.idx + 1 === TotalPage.length) {
      setCurrentStep({
        currentPage: TotalPage[0],
        idx: 0,
      });
      return;
    }
    setCurrentStep({
      currentPage: TotalPage[currentStep.idx + 1],
      idx: currentStep.idx + 1,
    });
  };

  return (
    <PageStepContext.Provider
      value={{ currentStep, handleCurrentStep, handleProvise }}>
      {children}
    </PageStepContext.Provider>
  );
};

export default PageStepProvider;
