import { PropsWithChildren, ReactNode, forwardRef } from 'react';

type FieldContainerProps = {
  title?: string;
  limitText?: string;
  addOn?: ReactNode;
};

const FieldContainer = forwardRef<HTMLDivElement, PropsWithChildren<FieldContainerProps>>(
  ({ title = '', children, addOn, limitText = '' }, ref) => {
    return (
      <div className="my-2" ref={ref}>
        <div className="flex justify-between">
          {title && <span className="text-xs text-gray-400">{title}</span>}
          {limitText ? <span className="text-xs text-gray-400">{limitText}</span> : null}
        </div>
        <div className="flex flex-col">
          {children}
          {addOn ? <div className="flex-center">{addOn}</div> : null}
        </div>
      </div>
    );
  },
);

export default FieldContainer;
