import { ReactElement } from "react";

import { FunnelStepProps } from "common/components/layout/funnel/FunnelStep";

interface FunnelContainerProps {
  currentStep: string;
  children: Array<ReactElement<FunnelStepProps>>;
}

export default function FunnelContainer({
  currentStep,
  children,
}: FunnelContainerProps) {
  const currentChildren = children.find(
    (childStep) => childStep.props.name === currentStep
  );

  return <>{currentChildren}</>;
}
