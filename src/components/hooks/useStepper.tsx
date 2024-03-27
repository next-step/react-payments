import { useState } from 'react';

export default function useStepper(initialStep = 0) {
  const [currentStep, setCurrentStep] = useState(initialStep);

  const goNextStep = () => setCurrentStep((prevStep) => prevStep + 1);
  const goPrevStep = () => setCurrentStep((prevStep) => prevStep - 1);

  return { currentStep, goNextStep, goPrevStep };
}
