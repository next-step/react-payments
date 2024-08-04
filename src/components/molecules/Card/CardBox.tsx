import { PropsWithChildren } from 'react';

type CardBoxProps = PropsWithChildren<{
  onClick?: () => void;
  isHover?: boolean;
  backgroundColor?: string;
}>;

export default function CardBox({
  children,
  onClick,
  isHover = false,
  backgroundColor,
}: CardBoxProps) {
  const cardBoxClassName = isHover ? 'card-box--hover' : 'card-box';

  return (
    <div
      className={cardBoxClassName}
      style={{ backgroundColor }}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
