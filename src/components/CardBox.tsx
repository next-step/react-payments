import { ReactNode } from 'react';

type CardBoxProps = {
  children: ReactNode;
  onClick?: () => void;
  backgroundColor?: string;
};

export default function CardBox({
  children,
  onClick,
  backgroundColor = '#e5e5e5',
}: CardBoxProps) {
  return (
    <div className="card-box" onClick={onClick}>
      <div className="empty-card" style={{ backgroundColor }}>
        {children}
      </div>
    </div>
  );
}
