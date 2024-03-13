import { ReactNode } from 'react';

type CardBoxProps = {
  children: ReactNode;
};

export default function CardBox({ children }: CardBoxProps) {
  return (
    <div className="card-box">
      <div className="empty-card">{children}</div>
    </div>
  );
}
