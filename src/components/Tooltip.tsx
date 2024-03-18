import { PropsWithChildren, useState } from 'react';

type TooltipType = {
  content: string;
} & PropsWithChildren;

const Tooltip = ({ content, children }: TooltipType) => {
  const [isShow, setIsShow] = useState(false);
  const mouseEnter = () => {
    setIsShow(true);
  };

  const mouseLeave = () => {
    setIsShow(false);
  };

  return (
    <div className="custom-tooltip-container" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
      {children}
      {isShow ? <div className="custom-tooltip">{content}</div> : null}
    </div>
  );
};

export default Tooltip;
