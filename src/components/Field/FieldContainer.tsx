import { PropsWithChildren, ReactNode, forwardRef } from 'react';
import { ErrorMessage } from '../Common';

type FieldContainerProps = {
  title?: string;
  limitText?: string;
  msg?: string;
  addOn?: ReactNode;
};

const FieldContainer = forwardRef<HTMLDivElement, PropsWithChildren<FieldContainerProps>>(
  ({ title = '', children, addOn, limitText = '', msg }, ref) => {
    return (
      <div className="my-1" ref={ref}>
        <div className="flex justify-between">
          {title && <span className="text-xs text-gray-400">{title}</span>}
          {limitText ? <span className="text-xs text-gray-400">{limitText}</span> : null}
        </div>
        <div className="flex">
          <div className="flex-1 flex flex-col">
            {children}
            {msg ? <ErrorMessage msg={msg} /> : null}
          </div>
          {addOn ? <div className="flex-center">{addOn}</div> : null}
        </div>
      </div>
    );
  },
);

export default FieldContainer;
