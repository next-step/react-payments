import type { ReactNode } from 'react';

function FieldContainer({
  title,
  children,
  addOn,
  textLength,
}: {
  title: string;
  children: ReactNode;
  addOn?: ReactNode;
  textLength?: string;
}) {
  return (
    <div className="input-container">
      <div className="flex-between">
        <span className="input-title">{title}</span>
        {textLength ? <span className="input-title">{textLength}</span> : null}
      </div>
      <div className="flex">
        {children}
        {addOn ? <div className="flex-center">{addOn}</div> : null}
      </div>
    </div>
  );
}

export default FieldContainer;
