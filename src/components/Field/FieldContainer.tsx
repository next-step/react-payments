import type { ReactNode } from 'react';

function FieldContainer({
  title,
  children,
  addOn,
  subTitle,
}: {
  title: string;
  children: ReactNode;
  addOn?: ReactNode;
  subTitle?: string;
}) {
  return (
    <div className="input-container">
      <div className="flex-between">
        <span className="input-title">{title}</span>
        {subTitle ? <span className="input-title">{subTitle}</span> : null}
      </div>
      <div className="flex">
        {children}
        {addOn ? <div className="flex-center">{addOn}</div> : null}
      </div>
    </div>
  );
}

export default FieldContainer;
