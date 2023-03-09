import { Circle } from './Icon';
import Button from './Button';

interface CardCompanyProps {
  name: string;
  bgColor: string;
  value: string;
  onClick?: (cardCompany: string) => void;
}

function CardCompany({ name, bgColor = 'black', value, onClick }: CardCompanyProps) {
  return (
    <Button value={value} onClick={() => onClick?.(value)} className="flex flex-col justify-center items-center gap-3">
      <Circle fill={bgColor} width={40} height={40} />
      <span className="text-xs">{name}</span>
    </Button>
  );
}

export default CardCompany;
