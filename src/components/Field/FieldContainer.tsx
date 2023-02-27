import type { ReactNode } from 'react';

function FieldContainer({
  title = '',
  children,
  addOn,
  textLength,
}: {
  title?: string;
  children: ReactNode;
  addOn?: ReactNode;
  textLength?: string;
}) {
  return (
    <div className="my-5">
      <div className="flex justify-between">
        {title && <span className="text-xs text-gray-400">{title}</span>}
        {textLength ? <span className="text-xs text-gray-400">{textLength}</span> : null}
      </div>
      <div className="flex">
        {children}
        {addOn ? <div className="flex-center">{addOn}</div> : null}
      </div>
    </div>
  );
}

export default FieldContainer;
