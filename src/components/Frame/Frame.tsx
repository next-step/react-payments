import React, { useCallback } from 'react';
import '../../styles/index.css';

type TFrameProps = {
  title?: string;
  children: React.ReactNode;
  onBackClick?: () => void;
};

function Frame({ title, children, onBackClick }: TFrameProps) {
  const handleBack = useCallback(() => {
    onBackClick?.();
  }, [onBackClick]);

  const LeftBack = useCallback(() => {
    return onBackClick ? (
      <>
        <span onClick={handleBack} style={{ marginRight: '0.5rem' }}>
          &lt;
        </span>
      </>
    ) : null;
  }, [onBackClick]);

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
