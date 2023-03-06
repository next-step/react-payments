import type { PropsWithChildren, ReactNode } from 'react';

type FieldContainerProps = {
  title?: string;
  limitText?: string;
  addOn?: ReactNode;
};

function FieldContainer({ title = '', children, addOn, limitText = '' }: PropsWithChildren<FieldContainerProps>) {
  return (
    <div className="my-2">
      <div className="flex justify-between">
        {title && <span className="text-xs text-gray-400">{title}</span>}
        {limitText ? <span className="text-xs text-gray-400">{limitText}</span> : null}
      </div>
      <div className="flex">
        {children}
        {addOn ? <div className="flex-center">{addOn}</div> : null}
      </div>
    </div>
  );
}

export default FieldContainer;
