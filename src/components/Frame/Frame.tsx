import React from 'react';

type TFrameProps = {
  title?: string;
  backClickable?: boolean;
  children: React.ReactNode;
};

function Frame({ title, backClickable, children }: TFrameProps) {
  return (
    <div className="root">
      <div className="app">
        <h2 className="page-title">
          {backClickable && <span>&lt;</span>}
          {title}
        </h2>
        {children}
      </div>
    </div>
  );
}

export default Frame;
