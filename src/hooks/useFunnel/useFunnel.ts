import { useEffect } from "react";
import { useState } from "react";
import Funnel from "./Components/Funnel/Funnel";
import { updateQueryParams } from "./utils";

type useFunnelArgs = string[];
type StepsArgs = useFunnelArgs[number];

export default function useFunnel(steps: useFunnelArgs) {
  const storeFromSteps = steps.reduce<Record<string, unknown>>(
    (store, step) => {
      return { ...store, [step]: null };
    },
    {}
  );
  const [currentStep, setCurrentStep] = useState<StepsArgs>(steps[0]);
  const [stepStore, setStepStore] = useState(storeFromSteps);

  const setStep = (stepName: string, state: Record<string, unknown>) => {
    setCurrentStep(stepName);
    updateQueryParams("step", stepName);
    setStepStore((prev) => ({ ...prev, [currentStep]: { ...state } }));
  };

  useEffect(() => {
    updateQueryParams("step", steps[0]);
  }, []);

  return [Funnel, setStep, stepStore] as const;
}
