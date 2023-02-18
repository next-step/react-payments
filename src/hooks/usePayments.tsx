import { useState } from "react";

export const usePayments = () => {
  const [step, setStep] = useState<number>(0);

  return { step, setStep };
};
