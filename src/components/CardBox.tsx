import { PropsWithChildren } from 'react';

type CardBoxProps = {
  children?: PropsWithChildren<object>;
};

export default function CardBox({ children }: CardBoxProps) {
  return (
    <div className="card-box">
      <div className="empty-card">{children}</div>
    </div>
  );
}
