import { PropsWithChildren } from 'react';

interface CardBoxProps extends PropsWithChildren {
  onClick?: () => void;
}
const CardBox = ({ onClick, children }: CardBoxProps) => {
  return (
    <div onClick={onClick} className="card-box">
      {children}
    </div>
  );
};

export default CardBox;
