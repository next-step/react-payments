import React from 'react';
import { Link } from '../Link';

type TFrameProps = {
  title?: string;
  backLink?: string;
  children: React.ReactNode;
};

function Frame({ title, backLink, children }: TFrameProps) {
  return (
    <div className="root">
      <div className="app">
        <h2 className="page-title">
          {backLink && (
            <Link to={backLink}>
              <span>&lt;</span>
            </Link>
          )}
          {title}
        </h2>
        {children}
      </div>
    </div>
  );
}

export default React.memo(Frame);
