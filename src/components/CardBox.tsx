import { ReactNode } from 'react';

type CardBoxProps = {
  children: ReactNode;
  onClick: () => void;
};

export default function CardBox({ children, onClick }: CardBoxProps) {
  return (
    <div className="card-box" onClick={onClick}>
      <div className="empty-card">{children}</div>
    </div>
  );
}
