import React, { useCallback } from 'react';
import { useStepContext } from '../../context/StepContext';
import '../../styles/index.css';

type TFrameProps = {
  title?: string;
  backTo?: number;
  children: React.ReactNode;
};

function Frame({ title, backTo, children }: TFrameProps) {
  const { setStep } = useStepContext();

  const LeftBack = useCallback(() => {
    return (
      (backTo && setStep && (
        <>
          <span onClick={() => setStep(backTo)} style={{ marginRight: '0.5rem' }}>
            &lt;
          </span>
        </>
      )) ||
      null
    );
  }, [backTo, setStep]);

  return (
    <div className="root">
      <div className="app">
        <h2 className="page-title">
          <LeftBack />
          {title}
        </h2>
        {children}
      </div>
    </div>
  );
}

export default React.memo(Frame);
