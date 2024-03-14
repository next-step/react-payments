import { Children, cloneElement, useState } from "react";

const Step = ({ update, back, next, children }) => {
  return cloneElement(children, {
    ...children.props,
    update,
    back,
    next,
  });
};

const Funnel = (props) => {
  const { steps, children } = props;
  const [currentStep, setCurrentStep] = useState(steps[0]);

  const update = (step) => {
    setCurrentStep(step);
  };

  const back = () => {
    const currentIndex = steps.indexOf(currentStep);

    if (currentIndex === 0) return;
    setCurrentStep(steps[currentIndex - 1]);
  };

  const next = () => {
    const currentIndex = steps.indexOf(currentStep);

    if (currentIndex === steps.length - 1) return;
    setCurrentStep(steps[currentIndex + 1]);
  };

  return Children.map(children, (child) => {
    if (child.props.name === currentStep) {
      return cloneElement(child, {
        ...child.props,
        update,
        back,
        next,
      });
    }
  });
};

Funnel.Step = Step;

export default Funnel;
