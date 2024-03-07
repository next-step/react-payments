import { useState } from "react";

import { CurrentPage } from "common/types/page.type";

export default function useFunnel() {
  const [currentStep, setCurrentStep] = useState<CurrentPage>("addCard");

  const handleChangeCurrentStep = (step: CurrentPage) => {
    setCurrentStep(step);
  };

  return { currentStep, handleChangeCurrentStep };
}
