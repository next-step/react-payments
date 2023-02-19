import { MouseEvent, useMemo } from 'react';

import { Button } from '@/components/Common';

type CardSelectBoxProps = {
  name: string;
  color: string;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
};

export default function CardSelectBox({ name, color, onClick }: CardSelectBoxProps) {
  const cardStyle = useMemo(() => {
    return { backgroundColor: color };
  }, [color]);

  return (
    <Button type="button" className="modal-item-container" onClick={onClick} data-name={name} data-color={color}>
      <div className="modal-item-dot" style={cardStyle} />
      <span className="modal-item-name">{name} 카드</span>
    </Button>
  );
}
