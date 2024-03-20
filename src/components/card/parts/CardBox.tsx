import { type PropsWithChildren } from 'react';

type CardBoxProps = {
  onClick?: () => void;
} & PropsWithChildren;
const CardBox = ({ onClick, children }: CardBoxProps) => (
  <div onClick={onClick} className="card-box">
    {children}
  </div>
);

export default CardBox;
